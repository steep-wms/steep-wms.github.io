import Container from "./Container"
import Link from "./LinkFix"
import clsx from "clsx"
import { Balancer } from "react-wrap-balancer"

const now = new Date().getFullYear()

interface FooterProps {
  bgBg?: boolean
}

const Footer = ({ bgBg = false }) => {
  return (
    <footer
      className={clsx(
        "border-t border-gray-200 pb-20 pt-16 [&_a:hover]:text-gray-800 [&_a:hover]:underline [&_a]:text-gray-600",
        { "bg-gray-100/50": !bgBg, "bg-bg": bgBg },
      )}
    >
      <Container type="xl">
        <div className="grid w-[40rem] max-w-full grid-cols-1 justify-items-center gap-8 self-start text-center sm:grid-cols-3 sm:justify-items-start sm:text-left">
          <div>
            <Link href="/" className="group">
              <img
                src={`${process.env.basePath}/images/steep-logo.svg`}
                className="h-10 w-fit opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                width={1706.4}
                height={532.9}
                alt="Steep Logo"
                loading="lazy"
              />
              <img
                src={`${process.env.basePath}/images/steep-logo-white.svg`}
                className="hidden h-10 w-fit opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                width={1706.4}
                height={532.9}
                alt="Steep Logo"
                loading="lazy"
              />
            </Link>
          </div>
          <div>
            <h2 className="mb-2 font-normal">Resources</h2>
            <ul className="text-gray-600">
              <li>
                <Link href="/showcase">Showcase</Link>
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
                className="w-48 h-fit opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                width={301.647}
                height={82.609}
                alt="Fraunhofer Logo"
                loading="lazy"
              />
              <img
                src={`${process.env.basePath}/images/fraunhofer-light.svg`}
                className="hidden w-48 h-fit opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                width={301.647}
                height={82.609}
                alt="Fraunhofer Logo"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
