import Header from "../Header";
import Footer from "../Footer";

const Layout = props => (
  <main>
    <Header title={props.meta.title}/>
    <div className="container container-smaller main-content page-content">
      {props.children}
    </div>
    <Footer />
  </main>
);

export default Layout;
