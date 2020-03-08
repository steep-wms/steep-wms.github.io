import getScrollTop from "./lib/get-scroll-top";
import GlobalContext from "./lib/global-context";

function scrollTop(top) {
  if (typeof window !== "undefined") {
    document.body.scrollTop = document.documentElement.scrollTop = top;
  }
}

class ScrollLink extends React.Component {
  static contextType = GlobalContext;

  // smooth scroll
  scrollTo(endOffset, duration) {
    this.context.setAutoScrolling(true);

    if (!requestAnimationFrame) {
      scrollTo(endOffset);
    }

    let startOffset = getScrollTop();
    if (startOffset === endOffset) {
      this.context.setAutoScrolling(false);
      return;
    }

    let distance = endOffset - startOffset;
    let start = undefined;

    let step = timestamp => {
      if (!start) {
        start = timestamp;
      }
      let elapsed = timestamp - start;
      let t = Math.min(1, elapsed / duration);
      let currentOffset = startOffset + distance * (t * (2 - t));
      scrollTop(currentOffset);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        this.context.setAutoScrolling(false);
      }
    };

    requestAnimationFrame(step);
  }

  handleClick = (e) => {
    let id = this.props.href;
    if (id.startsWith("/")) {
      id = id.substring(1);
    }
    if (id.startsWith("#")) {
      id = id.substring(1);
    }
    let target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      // leave room for navbar
      let room = Math.max(15, this.context.navBarPinned ? this.context.navBarHeight : 0);

      let padding = Number.parseInt(window.getComputedStyle(target).paddingTop);
      let offset = target.offsetTop + padding - room;
      this.scrollTo(offset, 500);

      window.location.href = "#" + id;
    }
  }

  render() {
    return <a {...this.props} onClick={this.handleClick}></a>
  }
}

export default ScrollLink;
