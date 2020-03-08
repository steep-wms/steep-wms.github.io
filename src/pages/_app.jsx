import "../css/main.scss";
import GlobalContext from "../components/lib/global-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setAutoScrolling = (autoScrolling) => {
      this.setState({
        autoScrolling
      });
    };

    this.setNavBarPinned = (navBarPinned) => {
      this.setState({
        navBarPinned
      });
    };

    this.setNavBarHeight = (navBarHeight) => {
      this.setState({
        navBarHeight
      });
    };

    this.state = {
      autoScrolling: false,
      navBarPinned: false,
      navBarHeight: 0,
      setAutoScrolling: this.setAutoScrolling,
      setNavBarPinned: this.setNavBarPinned,
      setNavBarHeight: this.setNavBarHeight
    };
  }

  render() {
    let Component = this.props.Component;
    let pageProps = this.props.pageProps;
    return (
      <GlobalContext.Provider value={this.state}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    );
  }
}

export default App;
