import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import CloudSupport from "@/components/home/CloudSupport"
import ExampleWorkflow from "@/components/home/ExampleWorkflow"
import HeroWorkflow from "@/components/home/HeroWorkflow"
import Microservices from "@/components/home/Microservices"
import MoreFeatures from "@/components/home/MoreFeatures"
import Showcase from "@/components/home/Showcase"
import WebUI from "@/components/home/WebUI"
import { robotoBlack } from "@/components/lib/roboto-black"
import clsx from "clsx"
import Balancer, { Provider } from "react-wrap-balancer"

const Home = () => {
  return (
    <Provider>
      <NavBar fixed={false} />
      <section
        id="hero"
        className={clsx(
          `${robotoBlack.variable} mx-auto mt-10 flex min-h-[780px] max-w-screen-2xl flex-col items-center justify-center px-2 md:mt-0`,
        )}
      >
        <h1 className="mx-2 xs:mx-8 mb-5 text-center text-[3.4rem] font-black leading-[1.1] text-gray-900">
          <Balancer>
            Scale <span style={{ letterSpacing: "-0.3rem" }}>Y</span>our Data{" "}
            <span style={{ letterSpacing: "-0.12rem" }}>W</span>
            orkflows to New Heights
          </Balancer>
        </h1>
        <p className="prose-lead prose mx-6 text-center text-[1.55rem] leading-[1.4] text-gray-600">
          <Balancer>
            <strong className="text-gray-700">Steep</strong> is a cloud-based
            workflow management system that orchestrates your microservices to
            process big data in a resource- and cost-efficient manner.
          </Balancer>
        </p>

        <div className="relative mb-4 mt-14 h-60 w-full overflow-hidden">
          <div className="absolute left-1/2 top-0 w-[76rem] -translate-x-1/2 px-24">
            <HeroWorkflow />
          </div>
        </div>
      </section>

      <section id="example-workflow">
        <ExampleWorkflow />
      </section>

      <section id="microservices" className="mt-32">
        <Microservices />
      </section>

      <section id="cloud-support" className="mt-24">
        <CloudSupport />
      </section>

      <section id="web-ui" className="mt-24">
        <WebUI />
      </section>

      <section
        id="more-features"
        className="mt-32 bg-gradient-to-b from-gray-100/0 to-gray-100 pb-32"
      >
        <MoreFeatures />
      </section>

      <Footer bgBg={true} />
    </Provider>
  )
}

export default Home
