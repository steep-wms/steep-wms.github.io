"use client"

import Container from "../Container"
import CardOption from "./CardOption"
import Kubernetes from "./Kubernetes.mdx"
import Setup from "./Setup.mdx"
import clsx from "clsx"
import { useState } from "react"

type ActiveOption = "kubernetes" | "connectors"

const CloudSupport = () => {
  const [activeOption, setActiveOption] = useState<ActiveOption>("kubernetes")

  return (
    <div className="bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/0">
      <Container type="xl" className="2xl:px-2">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative row-start-2 text-sm lg:row-start-1 lg:mb-8 lg:mt-14">
            <Setup />
            <div
              className={clsx(
                "absolute left-0 top-0 w-full opacity-0 transition-opacity",
                { "opacity-100": activeOption === "kubernetes" },
              )}
            >
              <Kubernetes />
            </div>
          </div>
          <div className="text-md prose row-start-1 text-gray-800 lg:row-start-1">
            <h2 className="mb-0 text-[1.8em] font-normal leading-[1.6]">
              Cloud support
            </h2>
            <p className="lead">
              Deploy Steep to Kubernetes and automatically manage your cloud
              infrastructure based on resource demand.
            </p>
            <div className="mt-9 flex flex-col gap-4">
              <CardOption
                title={
                  <span className="text-[1.12em] leading-[1.5]">
                    Docker & Kubernetes
                  </span>
                }
                placement="right"
                active={activeOption === "kubernetes"}
                onActivate={() => setActiveOption("kubernetes")}
              >
                <p>
                  Steep has native support for Docker and Kubernetes. It can run
                  in a container and orchestrate other containers. It can also
                  be deployed to a Kubernetes cluster.
                </p>
              </CardOption>
              <CardOption
                title={
                  <span className="text-[1.12em] leading-[1.5]">
                    Connectors
                  </span>
                }
                placement="right"
                active={activeOption === "connectors"}
                onActivate={() => setActiveOption("connectors")}
              >
                <p>
                  Steep can connect to various cloud providers, such as AWS and
                  OpenStack. It creates and provisions virtual machines on
                  demand and destroys them when they are no longer needed.
                </p>
              </CardOption>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CloudSupport
