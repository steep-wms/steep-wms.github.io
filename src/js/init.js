const $ = require("jquery");
const Headroom = require("headroom.js");

export default () => {
  var headroom;

  function currentScrollTop() {
    return Math.max($("html,body").scrollTop(), window.pageYOffset,
      document.documentElement.scrollTop, document.body.scrollTop);
  }

  // smooth scroll
  function scrollTo(endOffset, duration) {
    // do not change state of main navbar while scrolling
    headroom.freeze();

    var r = $("html,body");
    if (!requestAnimationFrame) {
      r.scrollTop(endOffset);
    }

    var startOffset = currentScrollTop();
    if (startOffset == endOffset) {
      headroom.unfreeze();
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
      r.scrollTop(currentOffset);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        headroom.unfreeze();
      }
    }

    requestAnimationFrame(step);
  }

  // hide navbar if not needed
  var navbar = document.querySelector(".navbar");
  var navbarSupportedContent = $("#main-navbar #navbarSupportedContent");
  headroom = new Headroom(navbar, {
    offset: 100,
    onUnpin: function() {
      // hide navbar
      navbarSupportedContent.collapse("hide");
    }
  });
  headroom.init();

  // smooth scroll to sections
  $('a[href^="/#"][role!="tab"],a[href^="#"][role!="tab"]').click(function() {
    if (!$(this).hasClass("nav-link")) {
      // unpin main navbar if we clicked on a link in the text and not
      // on one in the navbar
      headroom.unpin();
    }

    var id = $.attr(this, "href");
    id = id.substr(id.indexOf("#"));
    // hide navbar before scrolling
    navbarSupportedContent.collapse("hide");
    scrollTo($(id).offset().top, 500);
    window.location.href = id;
    return false;
  });

  // add class to main-navbar if it is not collapsed (i.e. expanded)
  navbarSupportedContent.on("show.bs.collapse", function() {
    if (!$("#main-navbar").hasClass("headroom-not-collapse")) {
      $("#main-navbar").addClass("headroom-not-collapse");
    }
  });
  navbarSupportedContent.on("hidden.bs.collapse", function() {
    if ($("#main-navbar").hasClass("headroom-not-collapse")) {
      $("#main-navbar").removeClass("headroom-not-collapse");
    }
  });

  // switch language for all code samples at the same time
  var savedClickedElement;
  var savedScrollTop;
  var savedOffsetTop;
  var codeExampleTabs = $('.code-example a[data-toggle="tab"]');
  codeExampleTabs.on("show.bs.tab", function (e) {
    if (!$(this).data("prevent-send-event")) {
      // freeze state of main navbar
      headroom.freeze();

      // save current scroll top
      savedClickedElement = $(this);
      savedScrollTop = currentScrollTop();
      savedOffsetTop = savedClickedElement.offset().top;
    }
  });
  codeExampleTabs.on("shown.bs.tab", function (e) {
    // restore current scroll top
    var newOffsetTop = savedClickedElement.offset().top;
    $("html,body").scrollTop(newOffsetTop - (savedOffsetTop - savedScrollTop));

    if ($(this).data("prevent-send-event")) {
      // prevent .tab("show") from being called over and over again
      $(this).removeData("prevent-send-event");
    } else {
      var newId = $(e.target).attr("id");
      var newPrefix = newId.split(/-/).slice(0, 2).join("-");
      var otherTabs = $('.code-example a[data-toggle="tab"][id^="' + newPrefix + '"][id!="' + newId + '"]');
      otherTabs.data("prevent-send-event", true);
      otherTabs.tab("show");

      setTimeout(function() {
        // unfreeze state of main navbar after all events have been processed
        headroom.unfreeze();
      }, 0);
    }
  });
};
