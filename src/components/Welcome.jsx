import styles from "./Welcome.scss"
import { Book } from "react-feather"
import ScrollLink from "./ScrollLink"

export default () => (
  <div id="welcome" className="welcome">
    <div className="container">
      <div className="welcome-row">
        <div className="welcome-left">
          <div className="slogan">Steep is a Scientific Workflow
              Management System made for the Cloud</div>
          <div className="buttons">
            <ScrollLink href="/#download-and-get-started" className="btn btn-primary">
              <Book className="feather" /> Get started ...
            </ScrollLink>
          </div>
        </div>
        <div className="welcome-right">
          <img src="/images/workflow.svg" />
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </div>
)
