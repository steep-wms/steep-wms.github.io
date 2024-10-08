import pkg from "../../package.json"
import { Button } from "../Button"
import SimpleIcon from "../SimpleIcon"
import { Download } from "lucide-react"
import Link from "next/link"
import { siDocker, siGithub } from "simple-icons"

const DownloadButtons = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Link
        href={`https://github.com/steep-wms/steep/releases/download/v${pkg.version}/steep-${pkg.version}.zip`}
      >
        <Button>
          <div className="flex flex-row items-center gap-2">
            <Download />
            <div className="whitespace-nowrap">
              <span className="hidden sm:inline-block">Download</span> Steep{" "}
              {pkg.version} (binaries)
            </div>
          </div>
        </Button>
      </Link>
      <Link href="https://hub.docker.com/r/steep/steep/">
        <Button type="secondary">
          <div className="flex flex-row items-center gap-2">
            <SimpleIcon icon={siDocker} title="" />
            <div className="whitespace-nowrap">Docker image</div>
          </div>
        </Button>
      </Link>
      <Link href="https://github.com/steep-wms/steep">
        <Button type="secondary">
          <div className="flex flex-row items-center gap-2">
            <SimpleIcon icon={siGithub} title="" />
            <div className="whitespace-nowrap">Source code</div>
          </div>
        </Button>
      </Link>
    </div>
  )
}

export default DownloadButtons
