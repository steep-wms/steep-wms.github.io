$(function() {
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
});
