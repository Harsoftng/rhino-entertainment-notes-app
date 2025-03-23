import React, { useCallback, useEffect, useState } from "react";
import { useField } from "formik";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";
import { IAppTextAreaFieldProps } from "@/components/shared/types/IAppTextAreaFieldProps";

const AppTextAreaField = (
  props: IAppTextAreaFieldProps,
): React.ReactElement => {
  const {
    readOnly,
    label,
    onInputValueChanged = (f) => f,
    hasErrors: externalErrorState = false,
    name,
    placeholder = "Type here",
  } = props;

  const [field, meta] = useField(props);
  const [innerValue, setInnerValue] = useState(field.value as string);

  const debounced = useDebouncedCallback((event) => {
    if (field.onChange) {
      field.onChange(event);
      onInputValueChanged(event);
    }
  }, 200);

  useEffect(() => {
    if (field.value === "") {
      setInnerValue("");
    } else {
      setInnerValue(field.value);
    }
  }, [field.value]);

  const handleOnChange = useCallback(
    (event: any) => {
      event.persist();
      const newValue = event.currentTarget.value;
      setInnerValue(newValue);
      debounced(event);
    },
    [debounced],
  );

  const hasError: boolean = !!(meta.touched && meta.error);

  return (
    <div className="w-full">
      <label className="label pb15" htmlFor={name}>
        <span className="label-text text-gray-700">{label}</span>
      </label>

      <textarea
        id={name}
        value={innerValue as ""}
        name={name}
        rows={3}
        placeholder={placeholder}
        readOnly={readOnly}
        className={clsx(
          "textarea textarea-bordered textarea-primary w-full rounded-box",
          {
            "textarea-error": hasError || externalErrorState,
          },
        )}
        onChange={handleOnChange}
        onBlur={field.onBlur}
      />

      {meta.touched && meta.error ? (
        <label className="label">
          <span className="label-text-alt text-error text-center">
            {meta.error}
          </span>
        </label>
      ) : null}
    </div>
  );
};

export default AppTextAreaField;
