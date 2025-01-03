import { Button } from "@/components/Button"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import SimpleIcon from "@/components/SimpleIcon"
import Divider from "@/components/about/Divider"
import Profile from "@/components/about/Profile"
import SocialButton from "@/components/about/SocialButton"
import { robotoBold } from "@/components/lib/roboto-bold"
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr"
import clsx from "clsx"
import { Mail } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { siGithub, siInstagram, siX, siYoutube } from "simple-icons"

export const metadata: Metadata = {
  title: "About",
}

const About = () => {
  return (
    <>
      <NavBar />
      <h1
        className={clsx(
          `${robotoBold.variable} mt-40 text-center text-5xl font-bold text-gray-900`,
        )}
      >
        About
      </h1>
      <Divider />
      <Container type="md">
        <section id="story" className="prose text-center md:text-left">
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
          <h2 className="mb-10 text-center text-4xl">Our team</h2>
          <div className="not-prose mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            <Profile
              imageUrl={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/michel-kraemer-2019-09-400x400.jpg`}
              imageWidth={400}
              imageHeight={400}
              name="Michel Krämer"
              role="Lead developer"
              mail="michel.kraemer@igd.fraunhofer.de"
              githubUser="michel-kraemer"
              website="https://michelkraemer.com"
            />
            <Profile
              imageUrl={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/hendrik-wuerz-400x400.jpg`}
              imageWidth={400}
              imageHeight={400}
              name="Hendrik M. Würz"
              role="Core contributor"
              mail="hendrik.martin.wuerz@igd.fraunhofer.de"
              githubUser="hwuerz"
            />
            <Profile
              imageUrl={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/kevin-kocon-400x400.jpg`}
              imageWidth={400}
              imageHeight={400}
              name="Kevin Kocon"
              role="AI expert"
              mail="kevin.kocon@igd.fraunhofer.de"
            />
            <Profile
              imageUrl={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/eva-klien-400x400.jpg`}
              imageWidth={400}
              imageHeight={400}
              name="Eva Klien"
              role="Head of Spatial Information Management"
              mail="eva.klien@igd.fraunhofer.de"
            />
          </div>
        </section>
      </Container>
      <Divider />
      <Container type="lg">
        <section id="contact" className="prose mb-40">
          <h2 className="mb-10 text-center text-4xl">Contact us</h2>
          <p className="text-center lead max-w-2xl mx-auto">
            If you have questions about Steep, or if you want to discuss
            interesting ideas and projects, feel free to drop us an email.
          </p>
          <p className="text-center lead">
            You may also reach out to us or Fraunhofer IGD in general via social
            media.
          </p>
          <div className="mt-8 mb-12 text-center text-lg">
            <Link href="mailto:michel.kraemer@igd.fraunhofer.de">
              <Button>
                <Mail className="mr-1 mb-[2px]" />
                Send email
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <span className="group flex items-center gap-6 flex-wrap justify-center">
              <SocialButton
                icon={<SimpleIcon icon={siGithub} size={42} title="" />}
                title="Fork us on GitHub"
                href="https://github.com/steep-wms/"
              />
              <SocialButton
                icon={<SimpleIcon icon={siX} size={42} title="" />}
                title="Fraunhofer IGD X feed"
                href="https://twitter.com/fraunhofer_igd"
              />
              <SocialButton
                icon={<LinkedinLogo size={50} />}
                title="Fraunhofer IGD LinkedIn profile"
                href="https://www.linkedin.com/company/5642"
              />
              <SocialButton
                icon={<SimpleIcon icon={siYoutube} size={42} title="" />}
                title="Fraunhofer IGD YouTube channel"
                href="https://www.youtube.com/@FraunhoferIGD"
              />
              <SocialButton
                icon={<SimpleIcon icon={siInstagram} size={42} title="" />}
                title="Fraunhofer IGD Instagram feed"
                href="https://www.instagram.com/fraunhofer.igd/"
              />
            </span>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default About
