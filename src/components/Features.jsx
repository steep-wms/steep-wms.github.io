import chunk from "lodash/chunk";
import "./Features.module.scss";

export default ({ children, title }) => {
  let chunks = chunk(React.Children.toArray(children), 3);
  if (chunks.length > 0) {
    while (chunks[chunks.length - 1].length < 3) {
      chunks[chunks.length - 1].push(<div className="col-md py-4 px-lg-3"></div>);
    }
  }

  let features = chunks.map((cs, i) => {
    let row = cs.map((c, j) => (<div className="col-md py-4 px-lg-3" key={j}>{c}</div>));
    return (
      <div className="row mx-lg-n3" key={i}>
        {row}
      </div>
    );
  });

  return (
    <div id="features" className="container">
      <h2>{title}</h2>
      {features}
    </div>
  );
}
