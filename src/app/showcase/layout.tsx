import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

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
