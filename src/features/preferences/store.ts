import create from "zustand";
import { persist } from "zustand/middleware";

import { PreferredTheme } from "@features/preferences/types";

export interface PreferenceState {
  preferredTheme: PreferredTheme;
  toggleTheme: () => void;
}

export const preferenceStore = create<PreferenceState>()(
  persist(
    (set) => ({
      preferredTheme: "light",
      toggleTheme: () =>
        set((state: PreferenceState) => ({ preferredTheme: state.preferredTheme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme-storage", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    },
  ),
);
