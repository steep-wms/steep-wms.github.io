import Head from "next/head";
import Link from "next/link";
import { GitHub } from "react-feather";

export default ({ title = "Steep Workflow Management System" }) => (
  <header>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="author" content="Michel Krämer"/>
      <meta name="description" content="Scientific Workflows in the Cloud"/>
      <meta name="robots" content="index,follow"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet"/>
      <title>{title}</title>
    </Head>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="main-navbar">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/images/steep-logo.svg" width="200" />
          </a>
        </Link>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#download-and-get-started">Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#documentation">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/steep-wms/steep">
                <GitHub className="feather" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
