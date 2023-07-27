"use client"

import Container from "../Container"
import SegmentMetadata from "./SegmentMetadata.mdx"
import CardOption from "./CardOption"
import { useState } from "react"
import clsx from "clsx"

type ActiveOption = "metadata" | "scheduling"

const Microservices = () => {
  const [activeOption, setActiveOption] = useState<ActiveOption>("metadata")

  return (
    <div className="bg-gradient-to-b from-bg/0 via-gray-200/40 to-bg/0">
      <Container id="features" type="xl">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-md prose text-gray-800">
            <h3 className="mb-0 font-normal">Microservices</h3>
            <p className="lead">
              Steep is able to orchestrate microservices with almost arbitrary
              interfaces.
            </p>
            <div className="mt-9 flex flex-col gap-4">
              <CardOption
                title="Service metadata"
                active={activeOption === "metadata"}
                onActivate={() => setActiveOption("metadata")}
              >
                <p>
                  Every service has a unique ID, a name, and a description. The{" "}
                  <code>path</code> attribute points to the service’s executable
                  or Docker image, and the <code>runtime</code> and the{" "}
                  <code>parameters</code> specify how it is executed.
                </p>
              </CardOption>
              <CardOption
                title="Capability-based scheduling"
                active={activeOption === "scheduling"}
                onActivate={() => setActiveOption("scheduling")}
              >
                <p>
                  A services may require certain capabilities. During
                  scheduling, Steep matches these capabilities with those of
                  available agents in the distributed environment and assigns
                  the service accordingly.
                </p>
              </CardOption>
            </div>
          </div>
          <div
            className={clsx(
              "text-sm lg:mb-8 lg:mt-14 [&_[data-line]]:transition-opacity",
              {
                "[&_[data-line]:nth-child(n+9):nth-child(-n+11)]:opacity-30":
                  activeOption === "metadata",
                "[&_[data-line]:nth-child(n+9):nth-child(-n+11)]:opacity-100 [&_[data-line]]:opacity-30":
                  activeOption === "scheduling",
              },
            )}
          >
            <SegmentMetadata />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Microservices
