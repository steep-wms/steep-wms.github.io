import { create } from "zustand"

export type Theme = "light" | "dark"

interface ThemeState {
  theme: Theme | undefined
  setTheme: (theme: Theme) => void
}

export const useTheme = create<ThemeState>()(set => ({
  theme: undefined,
  setTheme: theme => set(_ => ({ theme })),
}))
