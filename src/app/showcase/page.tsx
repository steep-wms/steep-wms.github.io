import { robotoBold } from "@/components/lib/roboto-bold"
import Presentations from "@/components/showcase/Presentations"
import Publications from "@/components/showcase/Publications"
import Projects from "@/components/showcase/projects/Projects"
import clsx from "clsx"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Showcase",
}

const ShowcasePage = () => {
  return (
    <>
      <h1
        className={clsx(
          `${robotoBold.variable} mt-40 text-center font-bold text-5xl text-gray-900`,
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
