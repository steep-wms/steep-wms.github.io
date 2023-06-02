import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ title, children }) => (
  <main>
    <Header title={title} />
    {children}
    <Footer />
  </main>
)

export default Layout
