import Balancer, { Provider } from "react-wrap-balancer"
import HeroWorkflow from "./HeroWorkflow"
import NavBar from "@/components/NavBar"

const Home = () => {
  return (
    <Provider>
      <NavBar />
      <section
        id="hero"
        className="mx-auto flex min-h-[840px] max-w-screen-2xl flex-col items-center justify-center px-2 pt-4"
      >
        <h1 className="mx-8 mb-4 text-center text-[3rem] font-black leading-[1.15] text-gray-900">
          <Balancer>Scale Your Data Workflows to New Heights</Balancer>
        </h1>
        <p className="prose-lead prose mx-6 text-center text-[1.35rem] leading-[1.4] text-gray-600">
          <Balancer>
            <strong className="text-gray-700">Steep</strong> is a cloud-based
            workflow management system that orchestrates your microservices to
            process big data in a resource- and cost-efficient manner.
          </Balancer>
        </p>

        <div className="overflow-x mb-4 mt-12 w-[68rem] px-24">
          <HeroWorkflow />
        </div>
      </section>
    </Provider>
  )
}

export default Home
