import Container from "../Container"
import Link from "../LinkFix"
import Presentation from "./Presentation"

const Presentations = () => {
  return (
    <div className="relative">
      <div className="-z-10 absolute top-0 left-0 right-0 bottom-1/2 bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/40 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/30"></div>
      <div className="-z-10 absolute top-1/2 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-200/0 via-gray-200/40 to-gray-200/40 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/30"></div>
      <Container type="lg">
        <section id="presentations" className="mb-32 prose">
          <h2 className="mb-4 text-4xl">Presentations</h2>
          <p className="lead">
            Innovative topics around Steep presented at various events.
          </p>
          <div className="mt-16">
            <Presentation
              imageBaseName="wuerz-2023"
              nSlides={15}
              title="A Scalable AI Training Platform for Remote Sensing Data"
              speaker="Hendrik M. Würz"
              link="https://speakerdeck.com/hwuerz/a-scalable-ai-training-platform-for-remote-sensing-data"
            >
              Hendrik presented these slides at the AGILE 2023 conference in
              Delft. They show our work on a scalable platform for AI training
              based on the example of remote sensing data.
            </Presentation>
            <Presentation
              imageBaseName="wuerz-2022"
              nSlides={37}
              title="Dynamic Workflow Execution in the Cloud using Steep"
              speaker="Hendrik M. Würz"
              link="https://speakerdeck.com/hwuerz/dynamic-workflow-execution-in-the-cloud-using-steep"
            >
              This presentation was held by Hendrik in Berlin in 2022 as a guest
              lecture organized by the collaborative research center{" "}
              <Link href="https://fonda.hu-berlin.de/">
                FONDA - Foundations of Workflows for Large-Scale Scientific Data
                Analysis
              </Link>
              .
            </Presentation>
            <Presentation
              imageBaseName="kraemer-2020"
              nSlides={72}
              title="Capability-based scheduling of scientific workflows in the cloud"
              speaker="Michel Krämer"
              link="https://speakerdeck.com/michelkraemer/capability-based-scheduling-of-scientific-workflows-in-the-cloud"
            >
              Michel presented his paper{" "}
              <Link href="#publications">
                “Capability-based scheduling of scientific workflows in the
                cloud”
              </Link>{" "}
              at the DATA conference 2020. He talked about Steep’s software
              architecture and its scheduling algorithm that assigns process
              chains to virtual machines.
            </Presentation>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Presentations
