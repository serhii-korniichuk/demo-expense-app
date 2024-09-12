const baseURI = `https://incode-backend-dev.herokuapp.com`;

export const handleLogin = async (data: {
  username: string;
  password: string;
}) => {
  const rawResponse = await fetch(`${baseURI}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const content = await rawResponse.json();

  if (content.statusCode === 401) {
    throw new Error(`Come on, do better!`);
  } else {
    return content;
  }
};

export const handleRegister = async (data: {
  displayName: string;
  username: string;
  password: string;
}) => {
  const rawResponse = await fetch(`${baseURI}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const content = await rawResponse.json();

  if (content.statusCode === 400) {
    throw new Error(content.message);
  } else if (content.statusCode === 409) {
    throw new Error(`Username has already been taken`);
  } else {
    return content;
  }
};

export const handleLogout = async () => {
  const rawResponse = await fetch(`${baseURI}/auth/logout`);
  const content = await rawResponse.json();

  return content;
};