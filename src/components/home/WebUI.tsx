import Container from "../Container"
import Window from "../Window"
import { RotateCw } from "lucide-react"
import clsx from "clsx"

function Picture({ type }: { type: "dark" | "light" }) {
  return (
    <picture
      className={clsx({
        "hidden dark:block": type === "dark",
        "dark:hidden": type === "light",
      })}
    >
      <source
        srcSet={`${process.env.basePath}/images/webui-${type}-800.webp 800w, ${process.env.basePath}/images/webui-${type}-1280.webp 1280w, ${process.env.basePath}/images/webui-${type}-2560.webp 2560w`}
        sizes="(max-width: 992px) 100vw, 60vw"
        type="image/webp"
        width={2560}
        height={1600}
      />
      <img
        src={`${process.env.basePath}/images/webui-${type}-800.png`}
        srcSet={`${process.env.basePath}/images/webui-${type}-800.png 800w, ${process.env.basePath}/images/webui-${type}-1280.png 1280w, ${process.env.basePath}/images/webui-${type}-2560.png 2560w`}
        sizes="(max-width: 992px) 100vw, 60vw"
        alt="Web-based user interface"
        width={2560}
        height={1600}
      />
    </picture>
  )
}

const WebUI = () => {
  return (
    <Container type="xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-8">
        <Window className="shadow-gray-800/10 [box-shadow:1px_2px_20px_var(--tw-shadow-color),1px_1px_8px_var(--tw-shadow-color)] dark:border dark:border-gray-200 lg:col-span-5">
          <svg viewBox="0 0 2560 1600">
            <foreignObject width="100%" height="100%" x={0} y={0}>
              <Picture type="light" />
              <Picture type="dark" />
            </foreignObject>
            <rect
              x={2050}
              y={340}
              width={130}
              height={110}
              className="fill-white dark:fill-[#1b202b]"
            />
            <g transform="translate(2065 340)">
              <g className="origin-center animate-spin-4s [transform-box:fill-box]">
                <RotateCw
                  size={110}
                  className="stroke-[#6e757c] dark:stroke-[#e3e8ef]"
                ></RotateCw>
              </g>
            </g>
          </svg>
        </Window>
        <div className="text-md prose text-gray-800 lg:col-span-3 lg:mt-16">
          <h3 className="mb-0 font-normal">Web user interface</h3>
          <p className="lead">
            Submit workflows, monitor their progress, and review Steep’s
            configuration.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default WebUI
