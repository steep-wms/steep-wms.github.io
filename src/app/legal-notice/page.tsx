import Legal from "@/components/Legal"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal notice",
}

const LegalNotice = () => (
  <Legal
    url="https://dsi.informationssicherheit.fraunhofer.de/en/impressum/steep/"
    title="Legal notice"
  />
)

export default LegalNotice
