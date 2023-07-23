import Balancer, { Provider } from "react-wrap-balancer"
import HeroWorkflow from "./HeroWorkflow"

const Home = () => {
  return (
    <Provider>
      <section
        id="hero"
        className="min-h-screen flex justify-center items-center flex-col"
      >
        <h1 className="text-[2.6rem] leading-[5rem] font-black text-gray-900">
          Scale Your Data Workflows to New Heights
        </h1>
        <p className="prose prose-lead max-w-2xl text-center text-xl leading-6 text-gray-600">
          <Balancer>
            <strong className="text-gray-700">Steep</strong> is a cloud-based
            workflow management system that orchestrates your microservices to
            process big data in a resource- and cost-efficient manner.
          </Balancer>
        </p>

        <div className="max-w-full h-48 px-24 mt-12">
          <HeroWorkflow />
        </div>
      </section>
    </Provider>
  )
}

export default Home
