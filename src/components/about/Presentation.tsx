interface PresentationProps {
  image: string
  width: number
  height: number
  link: string
  children: React.ReactNode
}

const Presentation = ({
  image,
  width,
  height,
  link,
  children,
}: PresentationProps) => {
  return (
    <div>
      <div className="not-prose flex justify-center">
        <a href={link} className="flex max-w-sm">
          <img
            src={image}
            alt="Slides"
            width={width}
            height={height}
            loading="lazy"
          />
        </a>
      </div>
      <div className="prose mt-6">
        {children}
        <p>
          <a href={link}>See slides ...</a>
        </p>
      </div>
    </div>
  )
}

export default Presentation
