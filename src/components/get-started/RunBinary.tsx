import pkg from "../../package.json"
import CodeContainer from "../CodeContainer"

const RunBinary = () => {
  return (
    <CodeContainer title="Terminal">
      <div data-rehype-pretty-code-fragment>
        <pre data-language="shell" data-theme="default">
          <code data-language="shell" data-theme="default">
            <span style={{ color: "#edf2f7" }}>cd </span>
            <span style={{ color: "#e16eaa" }}>steep-{pkg.version}</span>
            {"\n"}
            <span style={{ color: "#edf2f7" }}>bin/steep</span>
          </code>
        </pre>
      </div>
    </CodeContainer>
  )
}

export default RunBinary
