import pkg from "../../package.json"

const RunBinary = () => {
  return (
    <div data-rehype-pretty-code-fragment>
      <pre>
        <code>
          <span style={{ color: "#edf2f7" }}>cd </span>
          <span style={{ color: "#e16eaa" }}>steep-{pkg.version}</span>
          {"\n"}
          <span style={{ color: "#edf2f7" }}>bin/steep</span>
        </code>
      </pre>
    </div>
  )
}

export default RunBinary
