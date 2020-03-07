import "./Feature.module.scss";

export default ({ icon, title, children }) => {
  return (
    <>
      <h6><span className="feature-icon">{icon}</span> {title}</h6>
      {children}
    </>
  );
};
