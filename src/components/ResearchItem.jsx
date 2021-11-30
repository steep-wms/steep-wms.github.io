import styles from "./ResearchItem.scss"

const ResearchItem = ({ image, pdf, children }) => {
  let img = <img src={image} className="img-fluid" alt="Preview" />
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
      <style jsx>{styles}</style>
    </div>
  )
}

export default ResearchItem
