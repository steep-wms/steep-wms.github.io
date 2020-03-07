import Link from "next/link";
import "./Footer.module.scss";
import init from "../js/init.js";

const format = new Intl.DateTimeFormat("en", { year: "numeric" });
const currentYear = format.format(new Date());

const Footer = () => {
  // client-side initialization
  React.useEffect(() => {
    init();
  });

  return (
    <footer>
      <div className="footer-background">
      </div>
      <div className="footer-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xs-12 col-md-5 col-lg-3">
              <a href="https://igd.fraunhofer.de"><img src="/images/fraunhofer-light.svg" className="img-fluid" /></a>
            </div>
            <div className="col-md-6 copyright">
              Copyright &copy; 2013-{currentYear} <a href="https://igd.fraunhofer.de">Fraunhofer Institute for Computer Graphics Research IGD</a><br/>
              [ <Link href="/imprint/"><a>Imprint</a></Link> | <Link href="/privacy/"><a>Privacy</a></Link> ]
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
