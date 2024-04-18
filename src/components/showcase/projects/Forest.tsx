import Link from "../../LinkFix"
import Project from "./Project"

const Forest = () => {
  return (
    <Project>
      <Link
        href="/showcase/forest-type-classification"
        className="group block relative w-full h-full"
      >
        <div className="flex flex-col justify-end px-12 pt-14 pb-16 relative z-10 w-full h-full">
          <h2 className="text-3xl font-bold mb-8">
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
              className="w-full h-full object-cover grayscale opacity-10 dark:opacity-20 group-hover:grayscale-[30%] transition-[filter_opacity] group-hover:opacity-20 dark:group-hover:opacity-30"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-80% via-bg/50 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-30% via-gray-200/30 to-gray-200/10 dark:from-gray-100/80 dark:via-60% dark:via-gray-100/30 dark:to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </Project>
  )
}

export default Forest
