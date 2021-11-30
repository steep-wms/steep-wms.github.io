import styles from "./Features.scss"

const Features = ({ children, title }) => (
  <div id="features" className="container">
    <h2 id="key-features">{title}</h2>
    <div className="features-grid">
      {children}
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default Features
