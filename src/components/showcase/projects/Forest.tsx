import Project from "./Project"
import Link from "next/link"

const Forest = () => {
  return (
    <Project>
      <Link
        href="/showcase/forest-type-classification"
        className="group relative block h-full w-full"
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-end px-12 pb-16 pt-14">
          <h2 className="mb-8 font-bold text-3xl">
            Training an AI for forest type classification
          </h2>
          <p>
            See how we’ve improved our training pipeline with Steep to create a
            neural network that can be used to respond to climate change.
          </p>
        </div>
        <div className="absolute inset-0">
          <picture>
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/forest-type-classification/satellite-image-small.avif`}
              type="image/avif"
              width={1376}
              height={690}
            />
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/forest-type-classification/satellite-image-small.jpg`}
              type="image/jpeg"
              width={1376}
              height={690}
            />
            {/*
              Fallback img should not have src to avoid loading it.
              See https://github.com/facebook/react/issues/22684
            */}
            <img
              alt="Background image"
              fetchPriority="high"
              className="h-full w-full object-cover opacity-10 grayscale transition-[filter_opacity] group-hover:opacity-20 group-hover:grayscale-[30%] dark:opacity-20 dark:group-hover:opacity-30"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/50 via-80% to-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-gray-200/30 via-30% to-gray-200/10 opacity-0 transition-opacity group-hover:opacity-100 dark:from-gray-100/80 dark:via-gray-100/30 dark:via-60% dark:to-gray-100/10" />
        </div>
      </Link>
    </Project>
  )
}

export default Forest
