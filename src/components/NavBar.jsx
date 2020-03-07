import "./NavBar.module.scss";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import { GitHub } from "react-feather";
import getScrollTop from "./lib/get-scroll-top";
import { AUTO_SCROLL_START, AUTO_SCROLL_END } from "./lib/events";

class NavBar extends React.Component {
  currentScrollTop = -1;
  ref = React.createRef();

  state = {
    top: undefined,
    leaving: false,
    pinned: false,
    collapse: false
  };

  autoScrolling = false;

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener(AUTO_SCROLL_START, this.onAutoScrollStart);
    window.addEventListener(AUTO_SCROLL_END, this.onAutoScrollEnd);

    // enable component after 100ms to give browser some time to scroll
    // to the right place
    setTimeout(() => {
      let newScrollTop = getScrollTop();
      this.currentScrollTop = newScrollTop;
      let height = this.ref.current.clientHeight;
      let isTop = newScrollTop <= height;
      if (!isTop) {
        this.setState({
          top: false,
          pinned: true
        });
      }
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener(AUTO_SCROLL_START, this.onAutoScrollStart);
    window.removeEventListener(AUTO_SCROLL_END, this.onAutoScrollEnd);
  }

  onAutoScrollStart = () => {
    this.autoScrolling = true;
    this.setState(state => ({
      top: false,
      pinned: true,
      collapse: false
    }));
  }

  onAutoScrollEnd = () => {
    setTimeout(() => {
      this.autoScrolling = false;
      this.setState(state => ({
        top: false,
        pinned: true,
        collapse: false
      }));
    }, 100);
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

    if (this.autoScrolling) {
      // do not change state of navbar while we are auto-scrolling
      this.currentScrollTop = newScrollTop;
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
      } else if (!this.state.pinned && diff < -2) {
        this.setState({
          pinned: true
        });
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
          <ScrollLink className="nav-item" href="/#features">Features</ScrollLink>
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
