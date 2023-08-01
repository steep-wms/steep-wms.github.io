interface PresentationProps {
  image: string
  link: string
  children: React.ReactNode
}

const Presentation = ({ image, link, children }: PresentationProps) => {
  return (
    <div>
      <div className="not-prose flex justify-center">
        <a href={link} className="flex max-w-sm">
          <img src={image} alt="Slides" />
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
