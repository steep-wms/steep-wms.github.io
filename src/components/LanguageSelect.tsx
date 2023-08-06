"use client"

import * as Select from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

interface LanguageSelectProps {
  languages: string[]
  current: string
  onChange: (lang: string) => void
}

const LanguageSelect = ({
  languages,
  current,
  onChange,
}: LanguageSelectProps) => {
  return (
    <Select.Root value={current} onValueChange={onChange}>
      <Select.Trigger
        aria-label="Language"
        className="flex items-center justify-center gap-[.1em] rounded-sm px-2 py-1 outline-none hover:bg-gray-700 dark:hover:bg-gray-200"
      >
        <div className="uppercase">
          <Select.Value />
        </div>
        <Select.Icon>
          <div className="flex">
            <ChevronDown size="1.2em" />
          </div>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="rounded bg-bg-secondary p-1 text-sm text-text drop-shadow-lg">
          <Select.Viewport>
            {languages.map(lang => (
              <Select.Item
                value={lang}
                key={lang}
                className="relative select-none rounded-sm py-1 pl-5 uppercase data-[highlighted]:bg-gray-700 data-[highlighted]:text-code-container-header data-[highlighted]:outline-none dark:data-[highlighted]:bg-gray-200"
              >
                <Select.ItemText>{lang}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 inline-flex h-5 w-5 select-none items-center justify-center">
                  <Check size=".9em" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default LanguageSelect
