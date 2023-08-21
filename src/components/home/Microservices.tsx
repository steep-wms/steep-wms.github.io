"use client"

import Container from "../Container"
import CardOption from "./CardOption"
import SegmentMetadata from "./SegmentMetadata.mdx"
import clsx from "clsx"
import { useState } from "react"

type ActiveOption = "metadata" | "scheduling"

const Microservices = () => {
  const [activeOption, setActiveOption] = useState<ActiveOption>("metadata")

  return (
    <div className="bg-gradient-to-b from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-gray-200/0 dark:via-gray-200/30 dark:to-gray-200/0">
      <Container type="xl" className="2xl:px-2">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-md prose text-gray-800">
            <h2 className="mb-0 text-[1.8em] font-normal leading-[1.6]">
              Microservices
            </h2>
            <p className="lead">
              Steep is able to orchestrate microservices with arbitrary
              interfaces and written in any programming language.
            </p>
            <div className="mt-9 flex flex-col gap-4">
              <CardOption
                title={
                  <span className="text-[1.12em] leading-[1.5]">
                    Service metadata
                  </span>
                }
                placement="left"
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
                title={
                  <span className="text-[1.12em] leading-[1.5]">
                    Capability-based scheduling
                  </span>
                }
                placement="left"
                active={activeOption === "scheduling"}
                onActivate={() => setActiveOption("scheduling")}
              >
                <p>
                  Services may require certain capabilities. During scheduling,
                  Steep matches these capabilities with those of available
                  agents in the distributed environment and assigns the services
                  accordingly.
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
