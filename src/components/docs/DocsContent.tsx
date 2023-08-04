"use client"

import Container from "../Container"
import ScrollObserver from "./ScrollObserver"
import SidebarLeft from "./SidebarLeft"
import SidebarRight from "./SidebarRight"
import { useState } from "react"

interface DocsContentProps {
  slug: string | undefined
  children?: React.ReactNode
}

const DocsContent = ({ slug, children }: DocsContentProps) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  )

  return (
    <Container
      type="2xl"
      className="mb-10 grid gap-10 px-2 [grid-template-columns:16rem_1fr_16rem]"
    >
      <SidebarLeft activeSlug={slug} />
      <ScrollObserver onChangeSlug={slug => setActiveSection(slug)}>
        <main className="prose mt-24">{children}</main>
      </ScrollObserver>
      {slug !== undefined ? (
        <SidebarRight slug={slug} activeSection={activeSection} />
      ) : undefined}
    </Container>
  )
}

export default DocsContent
