import React from "react";
import { Route, Routes } from "react-router-dom";
import { List } from "./list";
import { Create } from "./create";
import { AppLaylout } from "../components/AppLayout";

export function Blog() {
  const router = [
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    // TODO: 暂不支持
    {
      path: "/edit/:id",
      element: <Create />,
    },
  ];

  return (
    <AppLaylout>
      <Routes>
        {router.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </AppLaylout>
  );
}
