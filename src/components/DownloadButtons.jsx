import { Download, GitHub } from "react-feather"
import { Docker } from "@icons-pack/react-simple-icons"
import styles from "./DownloadButtons.scss"
import pkg from "../package.json"

const DownloadButtons = () => (
  <div className="download-btns">
    <a href={`https://github.com/steep-wms/steep/releases/download/v${pkg.version}/steep-${pkg.version}.zip`} className="btn btn-primary">
      <Download className="feather"/> Download Steep {pkg.version} (binaries)</a>
    <a href="https://hub.docker.com/r/steep/steep/" className="btn">
      <Docker className="simple-icon"/> Docker image</a>
    <a href="https://github.com/steep-wms/steep" className="btn">
      <GitHub className="feather"/> Source code</a>
    <style jsx>{styles}</style>
  </div>
)

export default DownloadButtons
