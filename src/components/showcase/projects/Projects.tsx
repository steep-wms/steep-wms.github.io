import { Button } from "../../Button"
import Container from "../../Container"
import { robotoBold } from "../../lib/roboto-bold"
import Forest from "./Forest"
import Telekom from "./Telekom"
import Link from "next/link"

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/0">
      <Container type="xl" className="mb-32">
        <section
          id="projects"
          className={`${robotoBold.variable} mb-16 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2`}
        >
          <Telekom />
          <Forest />
        </section>
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-8 text-center text-xl md:flex-row md:text-left">
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
