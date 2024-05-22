import { useZustandStore } from "@store/zustand";
import React, { useState } from "react";

export const HomeBody = () => {
  const { count } = useZustandStore();

  const [num, setNum] = useState(null);

  const arr = [2, 4, 8, 0, 5];
  const itentrie = arr.entries();

  const handleEntries = () => {
    const [index, val] = itentrie.next().value;
    setNum(val);
  };

  return (
    <div>
      <div> body: {count}</div>
      <div>num: {num}</div>
      <button
        onClick={() => {
          handleEntries();
        }}
      >
        itentrie
      </button>
    </div>
  );
};
