import styles from "./Feature.scss"

export default ({ icon, title, children }) => {
  return (
    <div className="feature">
      <h6><span className="feature-icon">{icon}</span> {title}</h6>
      {children}
      <style jsx>{styles}</style>
    </div>
  )
}
