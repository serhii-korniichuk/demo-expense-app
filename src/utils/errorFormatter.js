export const errorFormatter = (errors, isMultipleError) => {
  const errorNames = [
    ["confirmPassword", "Confirm password"],
    ["fullname", "Full name"],
    ["username", " User Name"],
    ["email", "Email"],
    ["password", "Password"],
  ];

  const formattedNames = Object.keys(errors).map((name) => {
    const matchedPair = errorNames.find((errorName) => name === errorName[0]);
    if (matchedPair) {
      return matchedPair[1];
    }
    return name;
  });

  return (
    formattedNames.toString().replaceAll(",", ", ") +
    ` field${isMultipleError ? "s are" : " is"} required.`
  );
};
