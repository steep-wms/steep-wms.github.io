import pkg from "../../package.json"

const RunDocker = () => {
  return (
    <div data-rehype-pretty-code-fragment>
      <pre data-language="bash" data-theme="default">
        <code data-language="bash" data-theme="default">
          <span data-line="">
            <span style={{ color: "#edf2f7" }}>docker </span>
            <span style={{ color: "#e16eaa" }}>run </span>
            <span style={{ color: "#e16eaa" }}>--name </span>
            <span style={{ color: "#e16eaa" }}>steep </span>
            <span style={{ color: "#e16eaa" }}>-d </span>
            <span style={{ color: "#e16eaa" }}>--rm </span>
            <span style={{ color: "#e16eaa" }}>-p </span>
            <span style={{ color: "#edf2f7" }}>8080:8080 </span>
            <span style={{ color: "#a0aec0" }}>\</span>
          </span>
          {"\n"}
          <span data-line="">
            {"    "}
            <span style={{ color: "#e16eaa" }}>-e STEEP_HTTP_HOST=</span>
            <span style={{ color: "#edf2f7" }}>0.0.0.0 </span>
            <span style={{ color: "#e16eaa" }}>steep/steep:{pkg.version}</span>
          </span>
        </code>
      </pre>
    </div>
  )
}

export default RunDocker
