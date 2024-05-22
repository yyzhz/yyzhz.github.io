import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// 获取根DOM元素
const container = document.getElementById("root");

// 使用 createRoot 创建一个根
if (container) {
  const root = createRoot(container);
  // 使用根的 render 方法来渲染应用
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("not find root id element");
}
