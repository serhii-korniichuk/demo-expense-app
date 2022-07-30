import React from "react";

type Props = {
  errorMessage: string,
  isLoading: boolean,
}

export const FormServiceInfo: React.FC<Props> = ({ errorMessage, isLoading }) => (
  <>
    {errorMessage && (
      <p className="form__service-message">
        {errorMessage}
      </p>
    )}

    {isLoading && (
      <p className="form__service-message">
        Please wait, loading...
      </p>
    )}
  </>
);
