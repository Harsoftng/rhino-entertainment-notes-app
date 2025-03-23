import React from "react";
import { Form, Formik } from "formik";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IFormInitialValues } from "@/components/app/types/IFormInitialValues";
import { useNotesFunctions } from "@/components/app/api/useNotesFunctions";
import { INotesFormProps } from "@/components/app/types/INotesFormProps";
import Validators from "@/components/shared/utils/Validators";
import AppInputField from "@/components/shared/forms/AppInputField";
import AppTextAreaField from "@/components/shared/forms/AppTextAreaField";

const NotesForm = ({ note, mode }: INotesFormProps): React.ReactElement => {
  const { createNote, updating, editNote } = useNotesFunctions();

  const initialValues: IFormInitialValues = {
    title: note?.title || "",
    note: note?.note || "",
  };

  const validationScheme = Yup.object({
    title: Validators.validateString(true, 5, 200),
    note: Validators.validateString(true, 10),
  });

  async function submitFormHandler(values: IFormInitialValues): Promise<void> {
    if (mode === "edit" && !note?.id) {
      toast("Invalid form input, select a valid note to update!", {
        type: "error",
      });
      return;
    }

    if (mode === "edit") {
      if (confirm("Are you sure you want to update this note")) {
        await editNote({ ...values, id: note?.id || "" });
      }
    } else {
      await createNote({ ...values });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitFormHandler}
      validationSchema={validationScheme}
    >
      {() => (
        <Form autoComplete="no" autoCorrect="yes">
          <div className="flex flex-col gap-y-4">
            <div className="w-full">
              <AppInputField
                label="Title"
                name="title"
                type="text"
                placeholder="Enter Title"
              />
            </div>

            <div className="w-full">
              <AppTextAreaField
                label="Description"
                name="note"
                placeholder="Enter Description"
              />
            </div>

            <div>
              <button
                disabled={updating}
                type="submit"
                className="btn btn-pill w-full btn-lg btn-warning text-capitalize p30"
              >
                {updating ? (
                  <div className="pt5">
                    <BeatLoader color="#292524" loading={true} />
                  </div>
                ) : (
                  <>{mode === "edit" ? "Edit Note" : "Create Note"}</>
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NotesForm;
