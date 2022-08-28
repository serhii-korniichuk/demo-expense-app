const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getToken,
};
export default authSelectors;
