import Container from "../../Container"
import Link from "../../LinkFix"
import MoreShowcases, { type MoreShowcasesProps } from "./MoreShowcases"
import ProjectGrid from "./ProjectGrid"
import ScrollTopWorkaround from "@/components/ScrollTopWorkaround"
import { robotoBold } from "@/components/lib/roboto-bold"

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
      <Container type="xl" className="mt-32 mb-32">
        <div className="mb-6">
          <Link
            href="/showcase"
            className="text-gray-600 hover:no-underline hover:text-gray-700"
          >
            &larr; Showcase
          </Link>
        </div>
        <ProjectGrid>
          <h1 className={`${robotoBold.variable} text-4xl font-bold mb-4`}>
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
