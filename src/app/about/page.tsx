import Container from "@/components/Container"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Divider from "@/components/about/Divider"
import Profile from "@/components/about/Profile"
import Presentation from "@/components/about/Presentation"
import ResearchItem from "@/components/about/ResearchItem"
import Link from "@/components/LinkFix"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

const About = () => {
  return (
    <>
      <NavBar />
      <h1 className="mt-40 text-center text-5xl font-bold text-gray-900">
        About
      </h1>
      <Divider />
      <Container type="md">
        <section id="story" className="prose">
          <p>
            Steep’s development is led by the competence center for Spatial
            Information Management of the{" "}
            <a href="https://igd.fraunhofer.de/">
              Fraunhofer Institute for Computer Graphics Research IGD
            </a>{" "}
            in Darmstadt, Germany. <em>Fraunhofer IGD</em> is the international
            leading research institution for applied visual computing. The
            competence center for <em>Spatial Information Management</em> offers
            expertise and innovative technologies that enable successful
            communication and efficient cooperation with the help of geographic
            information.
          </p>
          <p>
            <em>Steep</em> was initially developed within the research project
            “IQmulus” (A High-volume Fusion and Analysis Platform for Geospatial
            Point Clouds, Coverages and Volumetric Data Sets) funded from the 7
            <sup>th</sup> Framework Programme of the European Commission, call
            identifier FP7-ICT-2011-8, under the Grant agreement no. 318787 from
            2012 to 2016. It was previously called the &lsquo;IQmulus
            JobManager&rsquo; or just the &lsquo;JobManager&rsquo;.
          </p>
        </section>
      </Container>
      <Divider />
      <Container type="lg">
        <section id="team" className="prose">
          <h2 className="mb-10 text-center text-3xl">Contact the team</h2>
          <div className="not-prose mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            <Profile
              imageUrl={`${process.env.basePath}/images/about/michel-kraemer-2019-09-400x400.jpg`}
              name="Michel Krämer"
              role="Lead developer"
              mail="michel.kraemer@igd.fraunhofer.de"
              githubUser="michel-kraemer"
              website="https://michelkraemer.com"
            />
            <Profile
              imageUrl={`${process.env.basePath}/images/about/hendrik-wuerz-400x400.jpg`}
              name="Hendrik M. Würz"
              role="Core contributor"
              mail="hendrik.martin.wuerz@igd.fraunhofer.de"
              githubUser="hwuerz"
            />
            <Profile
              imageUrl={`${process.env.basePath}/images/about/kevin-kocon-400x400.jpg`}
              name="Kevin Kocon"
              role="AI expert"
              mail="kevin.kocon@igd.fraunhofer.de"
            />
            <Profile
              imageUrl={`${process.env.basePath}/images/about/eva-klien-400x400.jpg`}
              name="Eva Klien"
              role="Head of Spatial Information Management"
              mail="eva.klien@igd.fraunhofer.de"
            />
          </div>
        </section>
      </Container>
      <Divider />
      <Container type="sm">
        <section id="presentations" className="prose">
          <h2 className="mb-8 text-center text-3xl">Presentations</h2>
          <Presentation
            image="https://michelkraemer.com/images/presentations/capability-based-scheduling-scientific-workflows-cloud/capability-based-scheduling-scientific-workflows-cloud-1.jpg"
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
          </Presentation>
        </section>
      </Container>
      <Divider />
      <Container type="md">
        <section id="publications" className="prose">
          <h2 className="mb-8 text-center text-3xl">Publications</h2>
          <p>
            Steep and its predecessor JobManager have appeared in at least the
            following publications:
          </p>
          <div className="mb-32 flex flex-col gap-6">
            <ResearchItem
              image="https://michelkraemer.com/images/research/21-02.jpg"
              pdf="https://michelkraemer.com/publications/2021/Kraemer%20-%20Efficient%20Scheduling%20of%20Scientific%20Workflow%20Actions%20in%20the%20Cloud%20Based%20on%20Required%20Capabilities%20(accepted%20manuscript).pdf"
            >
              Krämer, M. (2021). Efficient Scheduling of Scientific Workflow
              Actions in the Cloud Based on Required Capabilities. In S.
              Hammoudi, C. Quix, &amp; J. Bernardino (Eds.),{" "}
              <i>Data Management Technologies and Applications</i>.
              Communications in Computer and Information Science (Vol. 1446, pp.
              32&ndash;55). Springer.{" "}
              <Link href="https://doi.org/10.1007/978-3-030-83014-4_2">
                https://doi.org/10.1007/978-3-030-83014-4_2
              </Link>
            </ResearchItem>
            <ResearchItem
              image="https://michelkraemer.com/images/research/21-01.jpg"
              pdf="https://michelkraemer.com/publications/2021/Kraemer,%20Wuerz,%20Altenhofen%20-%20Executing%20cyclic%20scientific%20workflows%20in%20the%20cloud.pdf"
            >
              Krämer, M., Würz, H. M., &amp; Altenhofen, C. (2021). Executing
              cyclic scientific workflows in the cloud.{" "}
              <i>Journal of Cloud Computing</i>, <i>10</i>(25), 1&ndash;26.{" "}
              <Link href="https://doi.org/10.1186/s13677-021-00229-7">
                https://doi.org/10.1186/s13677-021-00229-7
              </Link>
            </ResearchItem>
            <ResearchItem
              image="https://michelkraemer.com/images/research/20-03.jpg"
              pdf="https://michelkraemer.com/publications/2020/Kraemer%20-%20Capability-based%20Scheduling%20of%20Scientific%20Workflows%20in%20the%20Cloud.pdf"
            >
              Krämer, M. (2020). Capability-based Scheduling of Scientific
              Workflows in the Cloud.{" "}
              <i>
                Proceedings of the 9th International Conference on Data Science,
                Technology, and Applications DATA
              </i>
              , 43&ndash;54.{" "}
              <Link href="https://doi.org/10.5220/0009805400430054">
                https://doi.org/10.5220/0009805400430054
              </Link>
            </ResearchItem>
            <ResearchItem
              image="https://michelkraemer.com/images/research/18-01.jpg"
              pdf="https://michelkraemer.com/publications/2018/Kraemer,%20M.%20(2018).%20A%20Microservice%20Architecture%20for%20the%20Processing%20of%20Large%20Geospatial%20Data%20in%20the%20Cloud.pdf"
            >
              Krämer, M. (2018).{" "}
              <i>
                A Microservice Architecture for the Processing of Large
                Geospatial Data in the Cloud
              </i>{" "}
              (Doctoral dissertation). Technische Universität Darmstadt.{" "}
              <Link href="https://doi.org/10.13140/RG.2.2.30034.66248">
                https://doi.org/10.13140/RG.2.2.30034.66248
              </Link>
            </ResearchItem>
            <ResearchItem
              image="https://michelkraemer.com/images/research/16-01.jpg"
              pdf="https://michelkraemer.com/publications/2016/Boehm,%20Bredif,%20Gierlinger,%20Kraemer,%20Lindenbergh,%20Liu,%20Michel,%20Sirmacek%20-%20The%20IQmulus%20Urban%20Showcase%20-%20Automatic%20Tree%20Classification%20and%20Identification%20in%20Huge%20Mobile%20Mapping%20Point%20Clouds.pdf"
            >
              Böhm, J., Bredif, M., Gierlinger, T., Krämer, M., Lindenbergh, R.,
              Liu, K., … Sirmacek, B. (2016). The IQmulus Urban Showcase:
              Automatic Tree Classification and Identification in Huge Mobile
              Mapping Point Clouds.{" "}
              <i>
                ISPRS - International Archives of the Photogrammetry, Remote
                Sensing and Spatial Information Sciences
              </i>
              , <i>XLI</i>-<i>B3</i>, 301&ndash;307.
              <Link href="https://doi.org/10.5194/isprs-archives-XLI-B3-301-2016">
                https://doi.org/10.5194/isprs-archives-XLI-B3-301-2016
              </Link>
            </ResearchItem>
            <ResearchItem image="https://michelkraemer.com/images/research/15-04.jpg">
              Krämer, M., &amp; Senner, I. (2015). A modular software
              architecture for processing of big geospatial data in the cloud.{" "}
              <i>Computers &amp; Graphics</i>, <i>49</i>, 69&ndash;81.{" "}
              <Link href="https://doi.org/10.1016/j.cag.2015.02.005">
                https://doi.org/10.1016/j.cag.2015.02.005
              </Link>
            </ResearchItem>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default About
