import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ title, children }) => (
  <main>
    <Header title={title}/>
    <div className="container container-smaller main-content page-content">
      {children}
    </div>
    <Footer />
  </main>
)

export default Layout
