import Container from "../Container"
import Window from "../Window"
import WebUIScreenshot from "./WebUIScreenshot"

const WebUI = () => {
  return (
    <Container type="xl" className="2xl:px-2">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-8">
        <Window className="row-start-2 shadow-gray-800/10 [box-shadow:1px_2px_20px_var(--tw-shadow-color),1px_1px_8px_var(--tw-shadow-color)] dark:border dark:border-gray-200 lg:col-span-5 lg:row-start-1">
          <WebUIScreenshot />
        </Window>
        <div className="text-md prose row-start-1 text-center text-gray-800 lg:col-span-3 lg:row-start-1 lg:mt-16 lg:text-left">
          <h2 className="mb-0 text-[1.8em] font-normal leading-[1.6]">
            Web user interface
          </h2>
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
