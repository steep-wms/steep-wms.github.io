import getScrollTop from "./lib/get-scroll-top";
import { AUTO_SCROLL_START, AUTO_SCROLL_END } from "./lib/events";

function scrollTop(top) {
  if (typeof window !== "undefined") {
    document.body.scrollTop = document.documentElement.scrollTop = top;
  }
}

// smooth scroll
function scrollTo(endOffset, duration) {
  window.dispatchEvent(new Event(AUTO_SCROLL_START));

  if (!requestAnimationFrame) {
    scrollTo(endOffset);
  }

  var startOffset = getScrollTop();
  if (startOffset === endOffset) {
    window.dispatchEvent(new Event(AUTO_SCROLL_END));
    return;
  }

  var distance = endOffset - startOffset;
  var start = undefined;

  function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    var elapsed = timestamp - start;
    var t = Math.min(1, elapsed / duration);
    var currentOffset = startOffset + distance * (t * (2 - t));
    scrollTop(currentOffset);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      window.dispatchEvent(new Event(AUTO_SCROLL_END));
    }
  }

  requestAnimationFrame(step);
}

class ScrollLink extends React.Component {
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
      scrollTo(target.offsetTop, 500);
      window.location.href = "#" + id;
    }
  }

  render() {
    return <a {...this.props} onClick={this.handleClick}></a>
  }
}

export default ScrollLink;
