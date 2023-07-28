import Container from "../Container"
import Window from "../Window"

const WebUI = () => {
  return (
    <Container type="xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Window className="shadow-gray-800/10 [box-shadow:1px_2px_20px_var(--tw-shadow-color),1px_1px_8px_var(--tw-shadow-color)]">
          <picture>
            <source
              srcSet="/images/webui-light-800.webp 800w, /images/webui-light-1280.webp 1280w, /images/webui-light-2560.webp 2560w"
              sizes="(max-width: 992px) 100vw, 50vw"
              type="image/webp"
            />
            <img
              src="/images/webui-light-800.png"
              srcSet="/images/webui-light-800.png 800w, /images/webui-light-1280.png 1280w, /images/webui-light-2560.png 2560w"
              sizes="(max-width: 992px) 100vw, 50vw"
              alt="Web-based user interface"
            />
          </picture>
        </Window>
        <div className="text-md prose text-gray-800 lg:mt-14">
          <h3 className="mb-0 font-normal">Web user interface</h3>
          <p className="lead">
            Submit workflows, monitor progress, and review configuration with
            Steep’s web-based user interface.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default WebUI
