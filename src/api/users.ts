export const getUserToken = async (token: string) => {
  const authRequest = await fetch(`/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
    method: `GET`
  });

  return authRequest;
};

