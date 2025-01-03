import Project from "./Project"
import Link from "next/link"

const Telekom = () => {
  return (
    <Project>
      <Link
        href="/showcase/telekom"
        className="group relative block h-full w-full"
      >
        <div className="relative z-10 h-full w-full px-12 pb-16 pt-14">
          <div className="mb-3 flex flex-row items-center gap-2 text-xl font-normal">
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
          <h2 className="mb-8 font-bold text-3xl">
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
              className="h-full w-full object-cover opacity-20 grayscale transition-[filter_opacity] group-hover:opacity-20 group-hover:grayscale-[50%]"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-bg/0 via-bg/50 via-30% to-bg" />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-200/80 via-gray-200/30 via-60% to-gray-200/10 opacity-0 transition-opacity group-hover:opacity-100 dark:from-gray-100/80 dark:via-gray-100/30 dark:via-60% dark:to-gray-100/10" />
        </div>
      </Link>
    </Project>
  )
}

export default Telekom
