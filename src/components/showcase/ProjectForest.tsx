import Link from "../LinkFix"
import Project from "./Project"

const ProjectForest = () => {
  return (
    <Project>
      <Link
        href="/showcase/forest-type-classification"
        className="group relative w-full h-full"
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
        <div className="absolute inset-0 overflow-hidden">
          <picture>
            <source
              srcSet={`${process.env.basePath}/images/showcase/projects/forest-type-classification/satellite-image-small.avif`}
              type="image/avif"
              width={1376}
              height={690}
            />
            <img
              src={`${process.env.basePath}/images/showcase/projects/forest-type-classification/satellite-image-small.jpg`}
              alt="Background image"
              width={1376}
              height={690}
              loading="lazy"
              className="absolute -left-1/2 h-full min-w-fit grayscale opacity-10 dark:opacity-20 group-hover:grayscale-[30%] transition-[filter_opacity] group-hover:opacity-20 dark:group-hover:opacity-30"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-80% via-bg/50 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-30% via-gray-200/30 to-gray-200/10 dark:from-gray-100/80 dark:via-60% dark:via-gray-100/30 dark:to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </Project>
  )
}

export default ProjectForest
