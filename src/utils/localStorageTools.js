const getTokens = () => {
  if (localStorage.getItem("InCodeTokens")) {
    return JSON.parse(localStorage.getItem("InCodeTokens"));
  }
  return {};
};

const saveTokens = (userData) => {
  const prevTokenData = getTokens();
  localStorage.setItem(
    "InCodeTokens",
    JSON.stringify({ ...prevTokenData, ...userData })
  );
  return true;
};

const clearTokens = () => {
  localStorage.setItem("InCodeTokens", JSON.stringify({}));
  return true;
};

export { getTokens, saveTokens, clearTokens };
