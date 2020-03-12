import Link from "next/link";
import "./Footer.scss";

const format = new Intl.DateTimeFormat("en", { year: "numeric" });
const currentYear = format.format(new Date());

export default () => (
  <footer>
    <div className="footer-background">
    </div>
    <div className="footer-content">
      <div className="container">
        <div className="footer-row">
          <div className="logo">
            <a href="https://igd.fraunhofer.de"><img src="/images/fraunhofer-light.svg" className="img-fluid" /></a>
          </div>
          <div className="copyright">
            Copyright &copy; 2013-{currentYear} <a href="https://igd.fraunhofer.de">Fraunhofer Institute for Computer Graphics Research IGD</a><br/>
            [ <Link href="/imprint/"><a>Imprint</a></Link> | <Link href="/privacy/"><a>Privacy</a></Link> ]
          </div>
        </div>
      </div>
    </div>
  </footer>
);
