import { motion } from "framer-motion"
import prand from "pure-rand"
import { useRef } from "react"
import useInViewEx from "../hooks/useInViewEx"

const reset = { duration: 0 }

interface OrthophotoProps {
  t0: number
}

const Orthophoto = ({ t0 }: OrthophotoProps) => {
  const rng = prand.xoroshiro128plus(1302)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInViewEx(ref, { amount: 0.6 }, { amount: 0 })

  let tiles = []
  for (let y = 0; y < 5; ++y) {
    for (let x = 0; x < 5; ++x) {
      tiles.push(
        <svg
          viewBox="0 0 130 130"
          key={`${x}_${y}_mask`}
          className="h-full w-full shadow-lg shadow-gray-700/30 dark:shadow-gray-100/30"
        >
          <foreignObject width={650} height={650} y={-y * 130} x={-x * 130}>
            <img
              alt="Tile"
              src={`${process.env.basePath}/images/home/tiles.jpg`}
              width={650}
              height={650}
              loading="lazy"
            />
          </foreignObject>
        </svg>,
      )
    }
  }

  let masks = []
  for (let y = 0; y < 5; ++y) {
    for (let x = 0; x < 5; ++x) {
      let delay = prand.unsafeUniformIntDistribution(1, 1000, rng) / 1000
      masks.push(
        <motion.div
          className="relative flex"
          key={`${x}_${y}_mask`}
          variants={{
            initial: { opacity: 0, transition: reset },
            inView: { opacity: 1, transition: { delay: t0 + 1 + delay } },
          }}
        >
          <svg viewBox="0 0 130 130" className="h-full w-full">
            <foreignObject width={650} height={650} y={-y * 130} x={-x * 130}>
              <picture>
                <source
                  srcSet={`${process.env.basePath}/images/home/masks.webp`}
                  type="image/webp"
                  width={650}
                  height={650}
                />
                <img
                  alt="Tile"
                  src={`${process.env.basePath}/images/home/masks.jpg`}
                  width={650}
                  height={650}
                  loading="lazy"
                />
              </picture>
            </foreignObject>
          </svg>
          {x === 2 && y === 1 ? (
            <motion.div
              className="absolute left-0 top-0 z-10 h-full w-full bg-white"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 1,
                  translateX: "0%",
                  translateY: "0%",
                  transition: reset,
                },
                inView: {
                  opacity: [0, 0.5, 0, 0.5, 0, 0.5, 0.5, 0],
                  scale: 5,
                  translateX: "560%",
                  translateY: "110%",
                  transition: {
                    opacity: {
                      delay: t0 + 2.3,
                      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.9, 1],
                      duration: 1.5,
                      ease: "linear",
                    },
                    scale: { delay: t0 + 3, duration: 1, ease: "easeOut" },
                    translateX: { delay: t0 + 3, duration: 1, ease: "easeOut" },
                    translateY: { delay: t0 + 3, duration: 1, ease: "easeOut" },
                  },
                },
              }}
            ></motion.div>
          ) : undefined}
        </motion.div>,
      )
    }
  }

  return (
    <motion.div
      className="grid grid-cols-2 gap-6"
      initial="initial"
      animate={inView ? "inView" : "initial"}
      ref={ref}
    >
      <motion.div
        className="relative"
        variants={{
          initial: { padding: "1rem", transition: reset },
          inView: { padding: 0, transition: { delay: t0 + 0.5 } },
        }}
      >
        <motion.div
          variants={{
            initial: { opacity: 0, transition: reset },
            inView: { opacity: 1 },
          }}
          transition={{ delay: t0 }}
        >
          <motion.div
            className="grid grid-cols-5"
            variants={{
              initial: { gap: 0, transition: reset },
              inView: { gap: "0.25rem", transition: { delay: t0 + 0.5 } },
            }}
          >
            {tiles}
          </motion.div>
        </motion.div>
        <div className="absolute left-0 top-0 grid w-full grid-cols-5 gap-1">
          {masks}
        </div>
      </motion.div>
      <div className="relative z-20">
        <motion.img
          src={`${process.env.basePath}/images/home/2_1_mask.jpg`}
          alt="Large image tile"
          width={650}
          height={650}
          className="shadow-lg shadow-gray-800/30 dark:shadow-gray-100/30"
          loading="lazy"
          variants={{
            initial: { opacity: 0, transition: reset },
            inView: {
              opacity: 1,
              transition: { delay: t0 + 3.3, duration: 1, ease: "easeOut" },
            },
          }}
        />
        <motion.img
          src={`${process.env.basePath}/images/home/2_1.jpg`}
          alt="Large image tile mask"
          width={650}
          height={650}
          className="absolute left-0 top-0 opacity-50"
          loading="lazy"
          variants={{
            initial: { opacity: 0, transition: reset },
            inView: {
              opacity: 0.5,
              transition: { delay: t0 + 4.1, duration: 1, ease: "easeOut" },
            },
          }}
        />
      </div>
    </motion.div>
  )
}

export default Orthophoto
