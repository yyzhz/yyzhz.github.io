import React, { useMemo } from "react";
import { useRouteError } from "react-router-dom";

interface ErrorInfo {
  [key: string]: string;
}

export function ErrorPage() {
  const error: unknown = useRouteError();

  const errorMsg: string = useMemo(() => {
    const errorInfo = error as ErrorInfo | null;

    if (typeof errorInfo === "object" && errorInfo !== null) {
      if ("message" in errorInfo) {
        return errorInfo?.message;
      }
      if ("statusText" in errorInfo) {
        return errorInfo?.statusText;
      }
    }
    return "Not Found";
  }, [error]);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMsg}</i>
      </p>
    </div>
  );
}
