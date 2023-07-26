import Balancer, { Provider } from "react-wrap-balancer"
import HeroWorkflow from "./HeroWorkflow"
import NavBar from "@/components/NavBar"

const Home = () => {
  return (
    <Provider>
      <NavBar fixed={false} />
      <section
        id="hero"
        className="mx-auto flex min-h-[780px] max-w-screen-2xl flex-col items-center justify-center px-2"
      >
        <h1 className="mx-8 mb-5 text-center text-[3.4rem] font-black leading-[1.1] text-gray-900">
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

        <div className="overflow-x mb-4 mt-14 w-[76rem] px-24">
          <HeroWorkflow />
        </div>
      </section>
    </Provider>
  )
}

export default Home
