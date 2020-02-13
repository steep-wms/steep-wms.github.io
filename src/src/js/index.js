$(function() {
    // smooth scroll
    function scrollTo(endOffset, duration) {
        var r = $("html,body");
        if (!requestAnimationFrame) {
            r.scrollTop(endOffset);
        }

        var startOffset = Math.max(r.scrollTop(), window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (startOffset == endOffset) {
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
            }
        }

        requestAnimationFrame(step);
    }

    // hide navbar if not needed
    var navbar = document.querySelector(".navbar");
    var navbarSupportedContent = $("#main-navbar #navbarSupportedContent");
    new Headroom(navbar, {
        offset: 100,
        onUnpin: function() {
            // hide navbar
            navbarSupportedContent.collapse("hide");
        }
    }).init();

    // smooth scroll to sections
    $('a[href^="/#"][role!="tab"],a[href^="#"][role!="tab"]').click(function() {
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
        if (!$("#main-navbar").hasClass("not-collapse")) {
            $("#main-navbar").addClass("not-collapse");
        }
    });
    navbarSupportedContent.on("hidden.bs.collapse", function() {
        if ($("#main-navbar").hasClass("not-collapse")) {
            $("#main-navbar").removeClass("not-collapse");
        }
    });

    // switch language for all code samples at the same time
    $('#sec-data-models a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        if ($(this).data("prevent-send-event")) {
            // prevent .tab("show") from being called over and over again
            $(this).removeData("prevent-send-event");
        } else {
            var newId = $(e.target).attr("id");
            var newPrefix = newId.split(/-/).slice(0, 2).join("-");
            var otherTabs = $('#sec-data-models a[data-toggle="tab"][id^="' + newPrefix + '"][id!="' + newId + '"]');
            otherTabs.data("prevent-send-event", true);
            otherTabs.tab("show");
        }
    });
});
