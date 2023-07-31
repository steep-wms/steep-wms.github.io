"use client"

import Container from "../Container"
import Setup from "./Setup.mdx"
import Kubernetes from "./Kubernetes.mdx"
import CardOption from "./CardOption"
import { useState } from "react"
import clsx from "clsx"

type ActiveOption = "kubernetes" | "connectors"

const CloudSupport = () => {
  const [activeOption, setActiveOption] = useState<ActiveOption>("kubernetes")

  return (
    <div className="bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/0">
      <Container type="xl">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative text-sm lg:mb-8 lg:mt-14">
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
          <div className="text-md prose text-gray-800">
            <h3 className="mb-0 font-normal">Cloud support</h3>
            <p className="lead">
              Deploy Steep to Kubernetes and automatically manage your cloud
              infrastructure based on resource demand.
            </p>
            <div className="mt-9 flex flex-col gap-4">
              <CardOption
                title="Docker & Kubernetes"
                placement="right"
                active={activeOption === "kubernetes"}
                onActivate={() => setActiveOption("kubernetes")}
              >
                <p>
                  Steep has first-level support for Docker. It can run in a
                  container and orchestrate other containers. It can also be
                  deployed to a Kubernetes cluster.
                </p>
              </CardOption>
              <CardOption
                title="Connectors"
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
