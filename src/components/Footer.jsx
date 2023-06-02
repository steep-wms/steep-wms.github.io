import Link from "next/link"
import styles from "./Footer.scss"

const format = new Intl.DateTimeFormat("en", { year: "numeric" })
const currentYear = format.format(new Date())

const Footer = () => (
  <footer>
    <div className="footer-background"></div>
    <div className="footer-content">
      <div className="container">
        <div className="footer-row">
          <div className="logo">
            <a href="https://igd.fraunhofer.de">
              <img
                src="/images/fraunhofer-light.svg"
                className="img-fluid"
                alt="Fraunhofer IGD"
              />
            </a>
          </div>
          <div className="copyright" suppressHydrationWarning={true}>
            Copyright &copy; 2013-{currentYear}{" "}
            <a href="https://igd.fraunhofer.de">
              Fraunhofer Institute for Computer Graphics Research IGD
            </a>
            <br />[ <Link href="/imprint/">Imprint</Link> |{" "}
            <Link href="/privacy/">Privacy</Link> ]
          </div>
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </footer>
)

export default Footer
