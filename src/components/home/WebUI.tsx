import Window from "../Window"
import Container from "../Container"
import WebUIScreenshot from "./WebUIScreenshot"

const WebUI = () => {
  return (
    <Container type="xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-8">
        <Window className="shadow-gray-800/10 [box-shadow:1px_2px_20px_var(--tw-shadow-color),1px_1px_8px_var(--tw-shadow-color)] dark:border dark:border-gray-200 lg:col-span-5">
          <WebUIScreenshot />
        </Window>
        <div className="text-md prose text-center text-gray-800 lg:col-span-3 lg:mt-16 lg:text-left">
          <h3 className="mb-0 font-normal">Web user interface</h3>
          <p className="lead">
            Submit workflows, monitor their progress, and review Steep’s
            configuration.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default WebUI
