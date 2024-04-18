import clsx from "clsx"
import { RotateCw } from "lucide-react"

function Picture({ type }: { type: "dark" | "light" }) {
  return (
    <picture
      className={clsx({
        "hidden dark:block": type === "dark",
        "dark:hidden": type === "light",
      })}
    >
      <source
        srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-800.webp 800w, ${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-1280.webp 1280w, ${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-2560.webp 2560w`}
        sizes="(max-width: 992px) 100vw, 60vw"
        type="image/webp"
        width={2560}
        height={1600}
      />
      <img
        src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-800.png`}
        srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-800.png 800w, ${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-1280.png 1280w, ${process.env.__NEXT_ROUTER_BASEPATH}/images/webui-${type}-2560.png 2560w`}
        sizes="(max-width: 992px) 100vw, 60vw"
        alt="Web-based user interface"
        width={2560}
        height={1600}
        loading="lazy"
      />
    </picture>
  )
}

const WebUIScreenshot = () => {
  return (
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
  )
}

export default WebUIScreenshot
