import create from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useZustandStore = create(
  persist<BearState>(
    (set) => ({
      count: 0,
      increment: () => set((state: any) => ({ count: state.count + 1 })),
      decrement: () => set((state: any) => ({ count: state.count - 1 })),
    }),
    {
      name: "zustand",
    }
  )
);
