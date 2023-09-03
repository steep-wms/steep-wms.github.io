import Container from "../../Container"
import Link from "../../LinkFix"
import MoreShowcases from "./MoreShowcases"
import ProjectGrid from "./ProjectGrid"
import { robotoBold } from "@/components/lib/roboto-bold"

interface ProjectLayoutProps {
  title: string
  children: React.ReactNode
}

const ProjectLayout = ({ title, children }: ProjectLayoutProps) => {
  return (
    <Container type="lg" className="mt-32 mb-32">
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
      <MoreShowcases />
    </Container>
  )
}

export default ProjectLayout
