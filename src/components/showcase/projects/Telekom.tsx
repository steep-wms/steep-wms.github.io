import Project from "./Project"
import Link from "next/link"

const Telekom = () => {
  return (
    <Project>
      <Link
        href="/showcase/telekom"
        className="group block relative w-full h-full"
      >
        <div className="px-12 pt-14 pb-16 relative z-10 w-full h-full">
          <div className="flex flex-row items-center text-xl font-normal gap-2 mb-3">
            <div className="w-8">
              <img
                src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/telekom/telekom.svg`}
                alt="Telekom Logo"
                width={1000}
                height={1000}
              />
            </div>
            Deutsche Telekom
          </div>
          <h2 className="text-3xl font-bold mb-8">
            Cloud-based platform supporting the fibre roll-out in Germany
          </h2>
          <p>
            Steep is one of the core components of the platform we’ve built
            together with Deutsche Telekom to give them unlimited control over
            their data processing workflows.
          </p>
        </div>
        <div className="absolute inset-0">
          <picture>
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/telekom/t-car.avif`}
              type="image/avif"
              width={1835}
              height={860}
            />
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/telekom/t-car.jpg`}
              type="image/jpeg"
              width={1835}
              height={860}
            />
            {/*
              Fallback img should not have src to avoid loading it.
              See https://github.com/facebook/react/issues/22684
            */}
            <img
              alt="Background image"
              fetchPriority="high"
              className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-[50%] transition-[filter_opacity] group-hover:opacity-20"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-bg/0 via-30% via-bg/50 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-200/80 via-60% via-gray-200/30 to-gray-200/10 dark:from-gray-100/80 dark:via-60% dark:via-gray-100/30 dark:to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </Project>
  )
}

export default Telekom
