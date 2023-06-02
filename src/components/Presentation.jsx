import styles from "./Presentation.scss"

const Presentation = ({ image, link, children }) => {
  return (
    <div className="presentation">
      <div className="image">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt="Slides" />
        </a>
      </div>
      <div className="description">
        {children}
        <div className="slides-link">
          <a href={link} target="_blank" rel="noreferrer">
            See slides ...
          </a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Presentation
