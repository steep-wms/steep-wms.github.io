import Link from "../../LinkFix"

interface ProjectAuthorProps {
  name: string
  imgSrc: string
  imgWidth: number
  imgHeight: number
}

const ProjectAuthor = ({
  name,
  imgSrc,
  imgWidth,
  imgHeight,
}: ProjectAuthorProps) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Link href="/about/#team" className="w-16 rounded-full overflow-hidden">
        <img src={imgSrc} width={imgWidth} height={imgHeight} alt={name} />
      </Link>
      <span className="prose">
        by <Link href="/about/#team">{name}</Link>
      </span>
    </div>
  )
}

export default ProjectAuthor
