import { create } from "zustand";

type ThemeStore = {
  theme: string | null;
  setWaveTheme: (theme: string | null) => void;
};

export const useThemeStore = create<ThemeStore>()((set) => ({
  theme: "",
  setWaveTheme: (theme) => set(() => ({ theme: theme })),
}));
