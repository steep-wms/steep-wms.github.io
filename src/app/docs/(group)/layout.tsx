"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import SidebarLeft from "@/components/docs/SidebarLeft"
import SidebarRight from "@/components/docs/SidebarRight"
import ScrollObserver from "@/components/docs/ScrollObserver"
import TocNavBar from "@/components/docs/TocNavBar"
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  )
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <NavBar />
      <TocNavBar isOpen={mobileSidebarOpen} setIsOpen={setMobileSidebarOpen} />
      <Container
        id="docs-layout"
        type="2xl"
        className="mb-10 grid gap-10 xl:gap-6 2xl:gap-10 px-2 [grid-template-columns:minmax(0,1fr)] lg:[grid-template-columns:16rem_minmax(0,1fr)] xl:[grid-template-columns:14rem_minmax(0,1fr)_14rem] 2xl:[grid-template-columns:16rem_minmax(0,1fr)_16rem]"
      >
        <SidebarLeft className="hidden lg:flex pt-24" />
        <ScrollObserver onChangeSlug={slug => setActiveSection(slug)}>
          {children}
        </ScrollObserver>
        <SidebarRight
          className="hidden xl:flex pt-24"
          activeSection={activeSection}
        />
      </Container>
      <Footer />
      <Dialog.Root open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <div className="fixed top-16 left-0 right-0 bottom-0 z-[100] flex">
            <Dialog.Content
              className="flex h-full w-full bg-bg dark:bg-gray-100 [&[data-state='closed']]:animate-dialog-fade-out [&[data-state='open']]:animate-dialog-fade-in"
              onEscapeKeyDown={() => setMobileSidebarOpen(false)}
            >
              <div className="mt-6 ml-6 mr-6 w-full">
                <SidebarLeft
                  sticky={false}
                  onClickLink={() => setMobileSidebarOpen(false)}
                />
              </div>
              <Dialog.Close
                aria-label="Close"
                className="absolute top-5 right-7"
              >
                <X />
              </Dialog.Close>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default DocsLayout
