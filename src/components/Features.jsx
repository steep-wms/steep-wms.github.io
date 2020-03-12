import "./Features.scss";

export default ({ children, title }) => (
  <div id="features" className="container">
    <h2 id="key-features">{title}</h2>
    <div className="features-grid">
      {children}
    </div>
  </div>
);
