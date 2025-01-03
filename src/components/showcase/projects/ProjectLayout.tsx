import Container from "../../Container"
import MoreShowcases, { type MoreShowcasesProps } from "./MoreShowcases"
import ProjectGrid from "./ProjectGrid"
import ScrollTopWorkaround from "@/components/ScrollTopWorkaround"
import { robotoBold } from "@/components/lib/roboto-bold"
import Link from "next/link"

interface ProjectLayoutProps {
  title: string
  moreShowcases: MoreShowcasesProps["showcases"]
  children: React.ReactNode
}

const ProjectLayout = ({
  title,
  moreShowcases,
  children,
}: ProjectLayoutProps) => {
  return (
    <>
      <ScrollTopWorkaround />
      <Container type="xl" className="mb-32 mt-32">
        <div className="mb-6">
          <Link
            href="/showcase"
            className="text-gray-600 hover:text-gray-700 hover:no-underline"
          >
            &larr; Showcase
          </Link>
        </div>
        <ProjectGrid>
          <h1 className={`${robotoBold.variable} mb-4 font-bold text-4xl`}>
            {title}
          </h1>
        </ProjectGrid>
        {children}
        <MoreShowcases showcases={moreShowcases} />
      </Container>
    </>
  )
}

export default ProjectLayout
