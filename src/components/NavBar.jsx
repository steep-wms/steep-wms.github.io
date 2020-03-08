import "./NavBar.module.scss";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import { GitHub } from "react-feather";
import getScrollTop from "./lib/get-scroll-top";
import GlobalContext from "./lib/global-context";

class NavBar extends React.Component {
  static contextType = GlobalContext;

  currentScrollTop = -1;
  ref = React.createRef();

  state = {
    top: true,
    leaving: false,
    pinned: false,
    collapse: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    // enable component after 100ms to give browser some time to scroll
    // to the right place
    setTimeout(() => {
      if (!this.ref.current) {
        // component has already been unmounted again
        return;
      }

      let height = this.ref.current.clientHeight;
      this.context.setNavBarHeight(height);

      let newScrollTop = getScrollTop();
      this.currentScrollTop = newScrollTop;
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onToggle = () => {
    this.setState(state => ({
      collapse: !state.collapse
    }));
  }

  onScroll = (e) => {
    let newScrollTop = getScrollTop();

    if (this.currentScrollTop < 0) {
      // not enabled yet
      return;
    }

    if (this.context.autoScrolling) {
      // do not change 'pinned' state of navbar while we are auto-scrolling
      this.currentScrollTop = newScrollTop;

      // but toggle 'collapse' state
      if (this.state.collapse) {
        this.setState({
          collapse: false
        });
      }
      return;
    }

    let height = this.ref.current.clientHeight;
    let py = -this.ref.current.offsetTop;

    // If we are 'pinned' and scroll up until we reach the initial position
    // of the navbar, switch from 'pinned' to 'top'. Otherwise, switch from
    // 'top' to 'not-top' when the navbar leaves the screen.
    let isTop = this.state.pinned ? newScrollTop <= py : newScrollTop <= height;

    if (this.state.pinned && isTop) {
      this.setState({
        pinned: false
      });
      this.context.setNavBarPinned(false);
    }

    if (!isTop && this.state.top && !this.state.leaving) {
      // add .leaving class so there won't be a transition to translateY(-100%)
      this.setState({
        leaving: true,
        collapse: false
      });
    } else {
      this.setState({
        top: isTop,
        leaving: false
      });
    }

    if (!isTop) {
      // switch between 'pinned' states only if we're not 'top'
      let diff = newScrollTop - this.currentScrollTop;
      if (this.state.pinned && diff > 2) {
        this.setState({
          pinned: false,
          collapse: false
        });
        this.context.setNavBarPinned(false);
      } else if (!this.state.pinned && diff < -2) {
        this.setState({
          pinned: true
        });
        this.context.setNavBarPinned(true);
      }
    }

    this.currentScrollTop = newScrollTop;
  }

  render() {
    let top;
    if (this.state.top === undefined) {
      top = "";
    } else {
      top = this.state.top ? "top" : "not-top";
    }
    let leaving = this.state.leaving ? "leaving" : "";
    let pinned = this.state.pinned ? "pinned" : "not-pinned";
    let collapse = this.state.collapse ? "collapse" : "";
    return (
      <nav className={`navbar ${top} ${leaving} ${pinned} ${collapse}`}
          id="main-navbar" ref={this.ref}>
        <div className="container">
          <div className="head">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/steep-logo.svg" width="200" />
              </a>
            </Link>
            <div className="button" onClick={this.onToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ScrollLink className="nav-item" href="/#key-features">Features</ScrollLink>
          <ScrollLink className="nav-item" href="/#download-and-get-started">Download</ScrollLink>
          <ScrollLink className="nav-item" href="/#documentation">Docs</ScrollLink>
          <ScrollLink className="nav-item" href="/#about">About</ScrollLink>
          <ScrollLink className="nav-item" href="https://github.com/steep-wms/steep">
            <GitHub className="feather" />
          </ScrollLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
