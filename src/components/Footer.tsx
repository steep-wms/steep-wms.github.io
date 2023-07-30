import Container from "./Container"
import SimpleIcon from "./SimpleIcon"
import { siGithub } from "simple-icons"
import Link from "next/link"

const now = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 pb-20 pt-16 [&_a:hover]:text-gray-800 [&_a:hover]:underline [&_a]:text-gray-600">
      <Container type="xl">
        <div className="grid w-[40rem] max-w-full grid-cols-3 justify-items-start gap-8 self-start">
          <div>
            <Link href="/" className="group">
              <img
                src="/images/steep-logo.svg"
                className="h-10 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
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
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-normal">Legal</h2>
            <ul className="text-gray-600">
              <li>
                <Link href="legal-notice">Legal notice</Link>
              </li>
              <li>
                <Link href="privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-between gap-8 text-gray-600">
          <div className="mt-1">
            &copy; 2013&ndash;<span suppressHydrationWarning>{now}</span>{" "}
            <Link href="https://igd.fraunhofer.de/">
              Fraunhofer Institute for Computer Graphics Research IGD
            </Link>
            <br />
            <Link
              href="https://github.com/steep-wms/steep"
              className="group mt-4 inline-block"
            >
              <SimpleIcon
                icon={siGithub}
                className="fill-gray-600 transition-colors group-hover:fill-gray-800"
              />
            </Link>
          </div>
          <div>
            <Link href="https://igd.fraunhofer.de/" className="group">
              <img
                src="/images/fraunhofer.svg"
                className="w-44 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
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
