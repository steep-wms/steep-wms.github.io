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
        "my-8 grid grid-cols-1 gap-4 rounded-lg border border-gray-200 py-8 sm:[grid-template-columns:4rem_1fr]",
        {
          "items-center px-6 md:px-16": !long,
          "items-start px-6 md:px-10": long,
        },
      )}
    >
      <Link
        href="/about/#team"
        className="mx-auto w-16 overflow-hidden rounded-full"
      >
        <img
          src={authorImgSrc}
          width={authorImgWidth}
          height={authorImgHeight}
          alt={authorName}
          className="m-0 h-full w-full"
        />
      </Link>
      <span className="text-lg italic leading-7">
        “{quote}”{" "}
        {authorLongName !== undefined ? (
          <div className="mt-4 flex items-start gap-1 text-gray-600">
            <div>&mdash;</div>
            <div>{authorLongName}</div>
          </div>
        ) : (
          <>
            <span className="inline-block w-4"></span>
            <span className="whitespace-nowrap text-gray-600">
              &mdash; {authorName}
            </span>
          </>
        )}
      </span>
    </div>
  )
}

export default ProjectQuote
