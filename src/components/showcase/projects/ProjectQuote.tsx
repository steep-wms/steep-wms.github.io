import clsx from "clsx"
import Link from "next/link"

interface ProjectQuoteProps {
  authorName: string
  authorLongName?: React.ReactNode
  authorImgSrc: string
  authorImgWidth: number
  authorImgHeight: number
  quote: string
  long?: boolean
}

const ProjectQuote = ({
  authorName,
  authorLongName = undefined,
  authorImgSrc,
  authorImgWidth,
  authorImgHeight,
  quote,
  long = false,
}: ProjectQuoteProps) => {
  return (
    <div
      className={clsx(
        "border border-gray-200 rounded-lg py-8 my-8 not-prose grid grid-cols-1 sm:[grid-template-columns:4rem_1fr] gap-4",
        {
          "px-6 md:px-16 items-center": !long,
          "px-6 md:px-10 items-start": long,
        },
      )}
    >
      <Link
        href="/about/#team"
        className="rounded-full overflow-hidden w-16 mx-auto"
      >
        <img
          src={authorImgSrc}
          width={authorImgWidth}
          height={authorImgHeight}
          alt={authorName}
          className="w-full h-full"
        />
      </Link>
      <span className="italic text-lg leading-7">
        “{quote}”{" "}
        {authorLongName !== undefined ? (
          <div className="mt-4 text-gray-600 flex items-start gap-1">
            <div>&mdash;</div>
            <div>{authorLongName}</div>
          </div>
        ) : (
          <>
            <span className="inline-block w-4"></span>
            <span className="text-gray-600 whitespace-nowrap">
              &mdash; {authorName}
            </span>
          </>
        )}
      </span>
    </div>
  )
}

export default ProjectQuote
