import Container from "@/components/Container"
import { robotoBold } from "@/components/lib/roboto-bold"
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
      <Container type="sm" className="mb-32">
        <section id="presentations" className="prose">
          {/* <h2 className="mb-8 text-center text-3xl">Presentations</h2>
          <Presentation
            image="https://michelkraemer.com/images/presentations/capability-based-scheduling-scientific-workflows-cloud/capability-based-scheduling-scientific-workflows-cloud-1.jpg"
            width={1080}
            height={608}
            link="https://speakerdeck.com/michelkraemer/capability-based-scheduling-of-scientific-workflows-in-the-cloud"
          >
            This presentation was given by Michel Krämer at the DATA conference
            2020. He presented his paper entitled{" "}
            <Link href="#publications">
              “Capability-based scheduling of scientific workflows in the cloud”
            </Link>
            . Michel talked about Steep’s software architecture and its
            scheduling algorithm that assigns process chains to virtual
            machines.
          </Presentation> */}
        </section>
      </Container>
      <Publications />
    </>
  )
}

export default ShowcasePage
