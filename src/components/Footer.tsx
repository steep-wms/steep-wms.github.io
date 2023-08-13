import Container from "./Container"
import Link from "./LinkFix"
import { Balancer } from "react-wrap-balancer"

const now = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 pb-20 pt-16 [&_a:hover]:text-gray-800 [&_a:hover]:underline [&_a]:text-gray-600">
      <Container type="xl">
        <div className="grid w-[40rem] max-w-full grid-cols-1 justify-items-center gap-8 self-start text-center sm:grid-cols-3 sm:justify-items-start sm:text-left">
          <div>
            <Link href="/" className="group">
              <img
                src={`${process.env.basePath}/images/steep-logo.svg`}
                className="h-10 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                alt="Steep Logo"
              />
              <img
                src={`${process.env.basePath}/images/steep-logo-white.svg`}
                className="hidden h-10 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                alt="Steep Logo"
              />
            </Link>
          </div>
          <div>
            <h2 className="mb-2 font-normal">Resources</h2>
            <ul className="text-gray-600">
              <li>
                <Link href="/showcases">Showcases</Link>
              </li>
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="https://github.com/steep-wms/steep">GitHub</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-normal">Legal</h2>
            <ul className="text-gray-600">
              <li>
                <Link href="/legal-notice">Legal notice</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-x-16 gap-y-8 text-center text-gray-600 sm:flex-row sm:justify-between sm:text-left">
          <div className="mt-1">
            <Balancer>
              &copy; 2013&ndash;<span suppressHydrationWarning>{now}</span>{" "}
              <Link href="https://igd.fraunhofer.de/">
                Fraunhofer Institute for Computer Graphics Research IGD
              </Link>
            </Balancer>
          </div>
          <div>
            <Link href="https://igd.fraunhofer.de/" className="group">
              <img
                src={`${process.env.basePath}/images/fraunhofer.svg`}
                className="w-48 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                alt="Fraunhofer Logo"
              />
              <img
                src={`${process.env.basePath}/images/fraunhofer-light.svg`}
                className="hidden w-48 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                alt="Fraunhofer Logo"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
