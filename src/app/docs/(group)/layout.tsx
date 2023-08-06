"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import SidebarLeft from "@/components/docs/SidebarLeft"
import SidebarRight from "@/components/docs/SidebarRight"
import ScrollObserver from "@/components/docs/ScrollObserver"
import { useState } from "react"

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  )

  return (
    <>
      <NavBar />
      <Container
        type="2xl"
        className="mb-10 grid gap-10 px-2 [grid-template-columns:16rem_minmax(0,1fr)_16rem]"
      >
        <SidebarLeft />
        <ScrollObserver onChangeSlug={slug => setActiveSection(slug)}>
          {children}
        </ScrollObserver>
        <SidebarRight activeSection={activeSection} />
      </Container>
      <Footer />
    </>
  )
}

export default DocsLayout
