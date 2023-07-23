import Balancer, { Provider } from "react-wrap-balancer"
import HeroWorkflow from "./HeroWorkflow"
import NavBar from "@/components/NavBar"

const Home = () => {
  return (
    <Provider>
      <NavBar />
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center pt-4"
      >
        <h1 className="text-[3rem] font-black leading-[5.4rem] text-gray-900">
          Scale Your Data Workflows to New Heights
        </h1>
        <p className="prose-lead prose max-w-4xl text-center text-[1.35rem] leading-[1.9rem] text-gray-600">
          <Balancer>
            <strong className="text-gray-700">Steep</strong> is a cloud-based
            workflow management system that orchestrates your microservices to
            process big data in a resource- and cost-efficient manner.
          </Balancer>
        </p>

        <div className="mt-10 h-64 max-w-full px-24">
          <HeroWorkflow />
        </div>
      </section>
    </Provider>
  )
}

export default Home
