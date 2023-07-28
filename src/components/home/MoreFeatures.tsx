import Card from "../Card"
import Container from "../Container"

const MoreFeatures = () => {
  return (
    <Container type="xl" className="prose">
      <h3 className="text-center font-normal">But wait, there’s more!</h3>
      <p className="lead text-center">
        See what other features Steep has to offer.
      </p>
      <div className="prose-sm mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Automatic failover</h4>
          <p>
            Workflows or individual services can automatically be retried in
            case of an error, and crashed workflows can be resumed without
            information loss.
          </p>
        </Card>
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Cyclic workflows</h4>
          <p>
            Submit cyclic workflow graphs without a priori runtime knowledge.
            Workflows are converted incrementally and on-demand to so-called
            process chains.
          </p>
        </Card>
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Languages and runtimes</h4>
          <p>
            Custom runtimes allow your team to develop microservices in various
            programming languages and with different frameworks. This allows you
            to focus on the task at hand.
          </p>
        </Card>
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Interfaces and extensibility</h4>
          <p>
            Use the REST-like HTTP interface in your applications to submit
            workflows or to fetch information during execution. Write your own
            plugins to customize Steep.
          </p>
        </Card>
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Production-ready</h4>
          <p>
            Steep is very reliable and has been used in production for many
            years to execute workflows from various domains. The source code has
            a very high test coverage.
          </p>
        </Card>
        <Card className="bg-bg">
          <h4 className="mt-0 font-normal">Open-Source</h4>
          <p>
            Steep is free and open-source. It is released under the{" "}
            <a href="http://www.apache.org/licenses/LICENSE-2.0">
              Apache License, Version 2.0
            </a>
            . The code can be found on{" "}
            <a href="https://github.com/steep-wms/steep">GitHub</a>. We will be
            more than happy to accept your contributions!
          </p>
        </Card>
      </div>
    </Container>
  )
}

export default MoreFeatures
