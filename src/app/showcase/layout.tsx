import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

const ShowcaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default ShowcaseLayout
