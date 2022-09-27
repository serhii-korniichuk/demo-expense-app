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

  let originUrl = process.env.API;

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  const response = await fetch(`${originUrl || ""}${url}`, {
    headers,
    ...{ credentials: "include" },
    ...options,
  });

  const json = await response.json();

  return json;
};

export default fetchData;
