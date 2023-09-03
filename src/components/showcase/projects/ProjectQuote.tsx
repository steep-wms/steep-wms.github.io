import Link from "../../LinkFix"

interface ProjectQuoteProps {
  authorName: string
  authorImgSrc: string
  authorImgWidth: number
  authorImgHeight: number
  quote: string
}

const ProjectQuote = ({
  authorName,
  authorImgSrc,
  authorImgWidth,
  authorImgHeight,
  quote,
}: ProjectQuoteProps) => {
  return (
    <div className="border border-gray-200 rounded-lg px-16 py-8 my-8 not-prose grid [grid-template-columns:4rem_1fr] items-center gap-4">
      <Link href="/about/#team" className="rounded-full overflow-hidden">
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
        <span className="ml-4 text-gray-600">&mdash; {authorName}</span>
      </span>
    </div>
  )
}

export default ProjectQuote
