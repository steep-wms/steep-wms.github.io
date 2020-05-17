export default ({ image, pdf, children }) => {
  let img = <img src={image} className="img-fluid"/>
  return (
    <div className="research-item">
      <div className="research-image">
        {pdf ? <a href={pdf}>{img}</a> : img}
      </div>
      <div className="research-body">
        <div className="csl-bib-body">
          <div className="csl-entry">{children}
            {pdf && <><br/><span className="bib-links">[ <a href={pdf}>PDF</a> ]</span></>}
          </div>
        </div>
      </div>
    </div>
  )
}
