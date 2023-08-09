import Legal from "@/components/Legal"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy policy",
}

const PrivacyPolicy = () => (
  <Legal
    url="https://dsi.informationssicherheit.fraunhofer.de/en/dsi/steep/"
    title="Privacy policy"
  />
)

export default PrivacyPolicy
