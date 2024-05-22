import React from "react";
import { ErrorPage } from "./routes/components/error-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/home";
import { Blog } from "./routes/blog";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/blog/*",
      element: <Blog />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
