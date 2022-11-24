export const getInitialFields = (fields) => {
  return fields.reduce((acc, i) => ({ ...acc, [i?.name]: "" }), {});
};

export const isEqual = (a, b) => {
  return a === b;
};
