import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  foo: string;
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      () => ({
        foo: "bar",
      }),
      {
        name: "pokeyecto",
      },
    ),
  ),
);

export default useStore;
