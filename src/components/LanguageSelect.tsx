"use client"

import { Check, ChevronDown } from "lucide-react"
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components"

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
    <Select
      selectedKey={current}
      onSelectionChange={key => onChange(key as string)}
      aria-label="Language"
    >
      <Button
        className="flex h-full items-center justify-center gap-[.1em] rounded-sm px-2 py-1 outline-none hover:bg-gray-700 dark:hover:bg-gray-200"
        aria-label="Language"
      >
        <SelectValue className="uppercase" />
        <span aria-hidden="true">
          <ChevronDown size="1.2em" />
        </span>
      </Button>
      <Popover offset={5}>
        <ListBox className="rounded bg-bg-secondary p-1 text-sm text-text drop-shadow-lg">
          {languages.map(lang => (
            <ListBoxItem
              id={lang}
              key={lang}
              textValue={lang}
              className="relative flex h-6 select-none items-center rounded-sm px-6 text-xs leading-none data-[focused]:bg-primary data-[focused]:text-bg outline-none uppercase"
            >
              {({ isSelected }) => (
                <>
                  {lang}
                  {isSelected ? (
                    <div className="absolute left-0 inline-flex w-6 items-center justify-center">
                      <Check size="1em" />
                    </div>
                  ) : undefined}
                </>
              )}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  )
}

export default LanguageSelect
