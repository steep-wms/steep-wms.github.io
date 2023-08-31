import { robotoBold } from "@/components/lib/roboto-bold"
import Presentations from "@/components/showcase/Presentations"
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
        Showcase
      </h1>
      <Publications />
      <Presentations />
    </>
  )
}

export default ShowcasePage
