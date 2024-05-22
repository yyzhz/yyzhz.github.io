import React from "react";

import { AppLaylout } from "../components/AppLayout";
import { useZustandStore } from "@store/zustand";

interface HomeProps {
  name?: string;
}

export const Home = (props: HomeProps) => {
  const { count, increment, decrement } = useZustandStore();

  return (
    <AppLaylout>
      <div>
        <h3>{count}</h3>
        <button onClick={() => increment()}>up</button>
        <button onClick={() => decrement()}>down</button>
      </div>
    </AppLaylout>
  );
};
