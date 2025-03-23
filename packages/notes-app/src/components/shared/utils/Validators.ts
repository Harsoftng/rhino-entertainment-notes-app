import * as Yup from "yup";

export const validateString = (
  required = true,
  min = 2,
  max = 25500,
  message = "A value is required!",
) => {
  let schema = Yup.string()
    .min(min, "Value must be " + min + " characters or more!")
    .max(max, "Value must be " + max + " characters or less!");
  if (required) {
    schema = schema.required(message);
  }
  return schema;
};

const Validators = {
  validateString,
};
export default Validators;
