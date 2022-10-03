const fetchData = async (
  url,
  options = {},
  contentType = "application/json",
  additionalHeaders = {}
) => {
  const headers = {
    Accept: "application/json",
    ...additionalHeaders,
  };

  if (contentType) {
    headers["Content-Type"] = contentType;
  }
  headers["Access-Control-Allow-Origin"] = "*";

  const originUrl = process.env.REACT_APP_API_URL;

  console.log(originUrl);

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  const response = await fetch(`${originUrl || ""}${url}`, {
    headers,
    ...options,
  });

  if (![200, 201, 204].includes(response.status)) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }

  try {
    const json = await response.json();
    return json;
  } catch (error) {
    return false;
  }
};

export default fetchData;
