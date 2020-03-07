import "./Features.module.scss";

export default ({ children, title }) => (
  <div id="features" className="container">
    <h2>{title}</h2>
    <div className="features-grid">
      {children}
    </div>
  </div>
);
