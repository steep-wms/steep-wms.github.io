"use client"

import { useEffect } from "react"

import SegmentWorkflow from "./SegmentWorkflow.mdx"
import Orthophoto from "./Orthophoto"
import { Button } from "@/components/Button"
import { ChevronRight } from "lucide-react"
import { useAnimate, useInView, stagger } from "framer-motion"
import Container from "../Container"

const ExampleWorkflow = () => {
  const [scope, animate] = useAnimate()
  const codeInView = useInView(scope, { amount: 0.5 })

  useEffect(() => {
    if (codeInView) {
      animate("[data-line]", { opacity: 1 }, { delay: stagger(0.025) })
    }
  }, [animate, codeInView])

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 -z-50 h-full w-screen overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-full w-[6000px] -translate-x-1/2 overflow-hidden opacity-40"
          style={{
            backgroundImage: "url(/images/home/bg2.jpg)",
            backgroundSize: "3000px 100%",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            filter: "blur(50px)",
          }}
        ></div>
      </div>
      <Container id="features" type="xl">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            className="text-sm lg:mb-8 lg:mt-16 [&_[data-line]]:opacity-0"
            ref={scope}
          >
            <SegmentWorkflow />
          </div>
          <div className="text-md prose text-gray-800">
            <h3 className="font-normal">
              Declarative and data-driven workflows
            </h3>
            <p>
              This example splits an aerial image into 5&times;5 tiles and then
              applies an <span style={{ whiteSpace: "nowrap" }}>AI-based</span>{" "}
              image segmentation service to each of them.
            </p>

            <p className="mb-8">
              Steep automatically detects dependencies between the services and
              executes them in parallel if possible.
            </p>

            <Button className="text-sm">
              Read full tutorial
              <ChevronRight size="16" className="ml-1" />
            </Button>
          </div>
          <div className="bottom-0 right-0 md:mx-auto md:w-4/5 lg:absolute lg:mx-0 lg:w-3/5">
            <Orthophoto t0={0.5} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ExampleWorkflow
