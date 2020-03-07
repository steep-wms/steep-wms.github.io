import { Download, GitHub } from "react-feather";
import Docker from "@icons-pack/react-simple-icons/lib/Docker";
import "./DownloadButtons.module.scss";

export default () => (
  <div className="download-btns">
    <a href="https://github.com/steep-wms/steep/releases/download/v5.0.1/steep-5.0.1.zip" className="btn btn-primary">
      <Download className="feather"/> Download Steep 5.0.1 (binaries)</a>
    <a href="https://hub.docker.com/r/steep/steep/" className="btn btn-secondary">
      <Docker className="simple-icon"/> Docker image</a>
    <a href="https://github.com/steep-wms/steep" className="btn btn-secondary">
      <GitHub className="feather"/> Source code</a>
  </div>
);
