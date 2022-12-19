export const validateRequiredField = (value) => {
  if (!value.trim()) return "This is a required field";

  if (value) return "";
};

export const manageFormButton = (errors, fields) => {
  const hasErrors = Object.keys(errors).some((e) => errors[e]);
  const isEachFieldFilled = Object.keys(fields).every((f) => fields[f]);

  return hasErrors || !isEachFieldFilled;
};
