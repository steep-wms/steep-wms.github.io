"use client"

import Container from "../Container"
import DocsLink from "../DocsLink"
import useInViewEx from "../hooks/useInViewEx"
import Orthophoto from "./Orthophoto"
import SegmentationWorkflow from "./SegmentationWorkflow.mdx"
import { Button } from "@/components/Button"
import { stagger, useAnimate } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useEffect, useMemo } from "react"

const ExampleWorkflow = () => {
  const [scope, animate] = useAnimate()
  const codeInView = useInViewEx(scope, { amount: 0.5 }, { amount: 0 })

  useEffect(() => {
    if (codeInView) {
      animate("[data-line]", { opacity: 1 }, { delay: stagger(0.025) })
    } else {
      animate("[data-line]", { opacity: 0 }, { duration: 0 })
    }
  }, [animate, codeInView])

  // BUGFIX: Since we are by-passing React with framer-motion in the useEffect()
  // function above, we need to prevent the component from re-rendering. Otherwise,
  // our changes will be overwritten on every re-render (which, in this case,
  // also happens when the the workflow is 50% out of the screen because the
  // inViewEnter hook of useInViewEx is tiggered).
  let sw = useMemo(() => <SegmentationWorkflow />, [])

  return (
    <div className="relative">
      <Container type="xl" className="2xl:px-2">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            className="text-sm lg:mb-8 lg:mt-16 [&_[data-line]]:opacity-0"
            ref={scope}
          >
            {sw}
          </div>
          <div className="text-md prose text-gray-800">
            <h2 className="mb-[0.6em] text-[1.8em] font-normal leading-[1.6]">
              Declarative and data-driven workflows
            </h2>
            <p>
              This example splits an aerial image into 5&times;5 tiles and then
              applies an <span style={{ whiteSpace: "nowrap" }}>AI-based</span>{" "}
              image segmentation service to each of them.
            </p>

            <p className="mb-8">
              Steep automatically detects dependencies between the services and
              executes them in parallel if possible.
            </p>

            <DocsLink href="#aerial-image-segmentation">
              <Button className="text-sm">
                Read full tutorial
                <ChevronRight size="16" className="ml-1" />
              </Button>
            </DocsLink>
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
