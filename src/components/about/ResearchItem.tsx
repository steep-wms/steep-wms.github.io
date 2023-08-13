interface ResearchItemProps {
  image: string
  width: number
  height: number
  pdf?: string
  children: React.ReactNode
}

const ResearchItem = ({
  image,
  width,
  height,
  pdf,
  children,
}: ResearchItemProps) => {
  let img = (
    <img
      src={image}
      alt="Preview"
      width={width}
      height={height}
      loading="lazy"
      className="max-h-40 xs:max-h-none"
    />
  )
  return (
    <div className="flex flex-col items-center gap-4 xs:grid xs:grid-cols-[60px_1fr] xs:items-start sm:grid-cols-[80px_1fr]">
      <div className="not-prose mt-1 flex border border-gray-200 shadow">
        {pdf ? <a href={pdf}>{img}</a> : img}
      </div>
      <div className="prose">
        <div className="csl-bib-body">
          <div className="csl-entry">
            {children}
            {pdf && (
              <>
                <br />
                <span className="bib-links">
                  [ <a href={pdf}>PDF</a> ]
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchItem
