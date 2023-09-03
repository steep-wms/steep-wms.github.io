import { Button } from "../../Button"
import Container from "../../Container"
import Link from "../../LinkFix"
import { robotoBold } from "../../lib/roboto-bold"
import Forest from "./Forest"
import Telekom from "./Telekom"

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/0">
      <Container type="xl" className="mb-32">
        <section
          id="projects"
          className={`${robotoBold.variable} grid grid-cols-2 gap-8 mt-20 mb-16`}
        >
          <Telekom />
          <Forest />
        </section>
        <div className="flex justify-center">
          <div className="text-xl flex flex-row items-center gap-8">
            You want to know what Steep can do for you?
            <Link href="/about">
              <Button type="primary">Contact us!</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
