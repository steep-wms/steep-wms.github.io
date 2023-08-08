import { create } from "zustand"
import { persist } from "zustand/middleware"
import { produce } from "immer"

interface PreferredLanguageState {
  preferredLanguages: Record<string, string>
  setPreferredLanguage: (id: string, preferredLanguage: string) => void
}

export function makeLanguageStoreId(choices: string[]) {
  let s = [...choices]
  s.sort()
  return s.join("-")
}

export const usePreferredLanguage = create<PreferredLanguageState>()(
  persist(
    set => ({
      preferredLanguages: {},
      setPreferredLanguage: (id: string, preferredLanguage: string) =>
        set(
          produce(state => {
            state.preferredLanguages[id] = preferredLanguage
          }),
        ),
    }),
    {
      name: "steep-preferred-language",
    },
  ),
)
