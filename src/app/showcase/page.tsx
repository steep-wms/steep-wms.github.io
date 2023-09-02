import { robotoBold } from "@/components/lib/roboto-bold"
import Presentations from "@/components/showcase/Presentations"
import Projects from "@/components/showcase/Projects"
import Publications from "@/components/showcase/Publications"
import clsx from "clsx"

const ShowcasePage = () => {
  return (
    <>
      <h1
        className={clsx(
          `${robotoBold.variable} mt-40 text-center text-5xl font-bold text-gray-900`,
        )}
      >
        What we’ve created with Steep
      </h1>
      <Projects />
      <Publications />
      <Presentations />
    </>
  )
}

export default ShowcasePage
