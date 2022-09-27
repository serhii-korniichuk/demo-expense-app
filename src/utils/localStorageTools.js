const getTokens = () => {
  if (localStorage.getItem("InCodeTokens")) {
    return JSON.parse(isBrowser && localStorage.getItem("InCodeTokens"));
  }
  return {};
};

const saveTokens = (userData) => {
  const prevTokenData = localStorage.getItem("InCodeTokens") || {};
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
