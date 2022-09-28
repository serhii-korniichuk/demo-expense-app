import atob from "atob";

function isTokenExpired(token) {
  try {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  } catch (e) {
    return true;
  }
}

export default isTokenExpired;
