"use client"

import { cloneElement, Children, ReactNode, useEffect } from "react"
import {
  AnimationPlaybackControls,
  AnimationSequence,
  At,
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  easeOut,
  motion,
  SequenceTime,
  useAnimate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion"
import Link from "next/link"

const HeroWorkflow = () => {
  const [scope, animate] = useAnimate()
  const prefersReducedMotion = useReducedMotion()
  const getStartedBgOpacity = useMotionValue(0.5)

  useEffect(() => {
    let paths = scope.current.querySelectorAll("path[id^='path']")
    let pathKeyframes: Record<string, any> = {}
    for (let p of paths) {
      let x1 = []
      let y1 = []
      let x2 = []
      let y2 = []
      let step = (p.getTotalLength() + 100) / 10
      for (let i = 0; i <= 10; ++i) {
        let j = easeOut(i / 10) * 10
        let p1 = p.getPointAtLength(step * j)
        let p2 = p.getPointAtLength(step * j - 100)
        x1.push(p1.x)
        y1.push(p1.y)
        x2.push(p2.x)
        y2.push(p2.y)
      }
      pathKeyframes[p.id] = { x1, y1, x2, y2 }
    }

    let pathOptions: DynamicAnimationOptions & At = {
      duration: 1,
      ease: "linear",
    }
    let shadowFull: DOMKeyframesDefinition = {
      stdDeviation: 8,
      floodOpacity: 0.6,
    }
    let shadowHalf: DOMKeyframesDefinition = {
      stdDeviation: 4,
      floodOpacity: 0.3,
    }
    let shadowNone: DOMKeyframesDefinition = {
      stdDeviation: 0,
      floodOpacity: 0,
    }
    let shadowOptionsIn: DynamicAnimationOptions = {
      duration: 0.5,
      ease: "easeOut",
    }
    let shadowOptionsOut: DynamicAnimationOptions = {
      duration: 0.5,
      ease: "easeInOut",
    }

    let sequence: AnimationSequence = []

    function pushPath(id: string, at: string | number) {
      sequence.push([
        `#${id}-gradient`,
        pathKeyframes[id],
        { ...pathOptions, at },
      ])
    }

    function pushBox(
      id: string,
      keyframe: DOMKeyframesDefinition,
      options: DynamicAnimationOptions,
      at: SequenceTime,
    ) {
      sequence.push([`#${id}-shadow-drop`, keyframe, { ...options, at }])
    }

    function pushBoxIn(id: string, at: SequenceTime) {
      pushBox(id, shadowFull, shadowOptionsIn, at)
    }

    function pushBoxInHalf(id: string, at: SequenceTime) {
      pushBox(id, shadowHalf, shadowOptionsIn, at)
    }

    function pushBoxOut(id: string, at: SequenceTime) {
      pushBox(id, shadowNone, shadowOptionsOut, at)
    }

    pushPath("path1", 0.0)
    pushBoxIn("box1", 0.4)
    pushPath("path2", 1)
    pushBoxOut("box1", 1)
    pushBoxIn("box2", 1.4)
    pushPath("path3", 2)
    pushBoxOut("box2", 2)
    pushBoxInHalf("box3", 2.4)
    sequence.push([
      getStartedBgOpacity,
      0.8,
      { duration: 0.5, ease: "easeOut", at: 2.4 },
    ])

    pushPath("path7", 1.6)
    pushBoxIn("box6", 2)
    pushPath("path8", 2.6)
    pushBoxOut("box6", 2.6)
    pushBoxIn("box3", 3)
    sequence.push([
      getStartedBgOpacity,
      1,
      { duration: 0.5, ease: "easeOut", at: 3 },
    ])

    pushPath("path4", 3.6)
    pushPath("path9", 3.6)
    pushBoxOut("box3", 3.6)
    sequence.push([
      getStartedBgOpacity,
      0.5,
      { duration: 1, ease: "easeInOut", at: 3.6 },
    ])
    pushBoxIn("box4", 4)
    pushBoxIn("box7", 4)

    // +4
    pushPath("path5", 0.1)
    pushPath("path10", 0.6)
    pushBoxOut("box4", 0.1)
    pushBoxOut("box7", 0.6)

    pushBoxInHalf("box5", 0.5)
    pushBoxIn("box5", 1.0)
    pushPath("path6", 1.8)
    sequence.push([
      "#path6-bullet",
      { strokeOpacity: 0 },
      { duration: 0.4, at: 2 },
    ])
    pushBoxOut("box5", 1.8)

    let controls: AnimationPlaybackControls | undefined = undefined
    if (!prefersReducedMotion) {
      controls = animate(sequence, {
        repeat: Infinity,
      })
    }

    return () => {
      if (controls !== undefined) {
        controls.stop()
      }
    }
  }, [scope, animate, prefersReducedMotion, getStartedBgOpacity])

  let stroke = "#ced4da"
  let getStartedBox =
    "M867 180.9H698.2c-7.6 0-13.7-6.1-13.7-13.7v-37.3c0-7.6 6.1-13.7 13.7-13.7H867c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.5-6.2 13.7-13.7 13.7z"
  let svgPaths = [
    <path
      id="path10"
      key="path10"
      d="M1119.5 293.1h100.1c11 0 20-9 20-20v-92.5"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path9"
      key="path9"
      d="M880.5 161.1h115.4c11 0 20 9 20 20v79.5"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path8"
      key="path8"
      d="M519.5 148.5h165"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path7"
      key="path7"
      d="M69.6 148.5h273.9"
      style={{
        fill: "none",
        stroke: "url(#fadeOutLeft)",
        strokeMiterlimit: 10,
      }}
    />,
    <path
      id="path6"
      key="path6"
      d="M1362.5 148.5h161.8"
      strokeOpacity={1}
      style={{
        fill: "none",
        stroke: "url(#fadeOutRight)",
        strokeMiterlimit: 10,
      }}
    />,
    <path
      id="path5"
      key="path5"
      d="M1119.5 32.9H1249c11 0 20 9 20 20v62.8"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path4"
      key="path4"
      d="M880.5 135.8h78.1c11 0 20-9 20-20V65.7"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path3"
      key="path3"
      d="M636.1 32.9h86.4c11 0 20 9 20 20v62.8"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path2"
      key="path2"
      d="M349.5 32.9h110"
      style={{ fill: "none", stroke, strokeMiterlimit: 10 }}
    />,
    <path
      id="path1"
      key="path1"
      d="M.7 32.9h171.8"
      style={{
        fill: "none",
        stroke: "url(#fadeOutLeft)",
        strokeMiterlimit: 10,
      }}
    />,
    <path
      id="box1"
      key="box1"
      d="M335.3 65.2H186.5c-7.6 0-13.7-6.1-13.7-13.7V14.2c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.6-6.1 13.7-13.7 13.7z"
      style={{
        stroke: "url(#fadeOutLeft)",
        strokeMiterlimit: 10,
      }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box1-shadow)"
    />,
    <path
      id="box2"
      key="box2"
      d="M622.3 65.2H473.5c-7.6 0-13.7-6.1-13.7-13.7V14.2c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.6-6.1 13.7-13.7 13.7z"
      style={{ stroke, strokeMiterlimit: 10 }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box2-shadow)"
    />,
    <path
      id="box6"
      key="box6"
      d="M505.9 180.9H357.1c-7.6 0-13.7-6.1-13.7-13.7v-37.3c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.5-6.1 13.7-13.7 13.7z"
      style={{ stroke, strokeMiterlimit: 10 }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box6-shadow)"
    />,
    <path
      id="box3"
      key="box3"
      d={getStartedBox}
      style={{ stroke, strokeMiterlimit: 10 }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box3-shadow)"
    />,
    <path
      id="box4"
      key="box4"
      d="M1105.9 65.2H957.1c-7.6 0-13.7-6.1-13.7-13.7V14.2c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.6-6.1 13.7-13.7 13.7z"
      style={{ stroke, strokeMiterlimit: 10 }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box4-shadow)"
    />,
    <path
      id="box7"
      key="box7"
      d="M1105.9 325.5H957.1c-7.6 0-13.7-6.1-13.7-13.7v-37.3c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.5-6.1 13.7-13.7 13.7z"
      style={{ stroke, strokeMiterlimit: 10 }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box7-shadow)"
    />,
    <path
      id="box5"
      key="box5"
      d="M1348.8 180.9H1200c-7.6 0-13.7-6.1-13.7-13.7v-37.3c0-7.6 6.1-13.7 13.7-13.7h148.8c7.6 0 13.7 6.1 13.7 13.7v37.3c0 7.5-6.1 13.7-13.7 13.7z"
      style={{
        stroke: "url(#fadeOutRight)",
        strokeMiterlimit: 10,
      }}
      className="fill-bg transition-colors duration-300"
      filter="url(#box5-shadow)"
    />,
  ]

  let gradients: ReactNode[] = []
  let shadows: ReactNode[] = []
  let bulletPaths = Children.map(svgPaths, c => {
    if (c.props.id.startsWith("path")) {
      let gid = `${c.props.id}-gradient`
      let g = (
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={gid}
          key={gid}
          x1="0"
          y1="0"
          x2="0"
          y2="0"
        >
          <stop stopColor="#63b3ed" stopOpacity="0"></stop>
          <stop offset="0.05" stopColor="#63b3ed"></stop>
          <stop offset="1" stopColor="#63b3ed" stopOpacity="0"></stop>
        </linearGradient>
      )
      gradients.push(g)

      return cloneElement(c, {
        style: {
          fill: "none",
          stroke: `url(#${gid})`,
          strokeMiterlimit: 10,
        },
        className: "[stroke-width:4] dark:[stroke-width:5]",
        id: c.props.id + "-bullet",
        key: c.key + "-bullet",
      })
    } else {
      let sid = `${c.props.id}-shadow`
      let s = (
        <filter id={sid} key={sid} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            id={`${sid}-drop`}
            dx={0}
            dy={0}
            stdDeviation={
              !prefersReducedMotion &&
              (c.props.id === "box4" || c.props.id === "box7")
                ? 8
                : 0
            }
            floodOpacity={
              !prefersReducedMotion &&
              (c.props.id === "box4" || c.props.id === "box7")
                ? 0.6
                : 0
            }
            className="[flood-color:#63b3ed] dark:[flood-color:#90cdf4]"
          />
        </filter>
      )
      shadows.push(s)
    }
  })

  return (
    <div className="relative" ref={scope}>
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="-20 -20 1605 356"
        className="h-full w-full"
      >
        {svgPaths}
        {bulletPaths}
        <defs>
          {gradients}
          {shadows}
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="fadeOutLeft"
            x1="0"
            y1="0"
            x2="300"
            y2="0"
          >
            <stop offset="0%" stopColor={stroke} stopOpacity="0"></stop>
            <stop offset="100%" stopColor={stroke} stopOpacity="1"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="fadeOutRight"
            x1="1275"
            y1="0"
            x2="1605"
            y2="0"
          >
            <stop offset="0%" stopColor={stroke} stopOpacity="1"></stop>
            <stop offset="100%" stopColor={stroke} stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Link href="#" className="group">
        <div className="text absolute left-[28rem] top-[5.4rem] flex h-[2.63rem] w-[8rem] select-none items-center justify-center rounded-lg border border-primary bg-bg font-normal shadow-[0px_0px_10px] shadow-primary/50 transition-colors group-hover:bg-primary">
          <motion.div
            className="absolute left-0 top-0 -z-10 h-full w-full bg-primary blur-xl"
            style={{ opacity: getStartedBgOpacity }}
          ></motion.div>
          <div className="transition-colors group-hover:text-bg">
            Get started
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HeroWorkflow
