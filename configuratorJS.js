$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".menu-item");
    let selections = $(".selection");
    let buttonModes = $(".button-mode");

    // actions
    $(document).click(function (event) {
        if (!$(event.target).closest("#configurator-area").length) {
            $("#configurator-area").find(".active").removeClass("active");
        }
    });

    menuItems.on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            return area
                .find(`[name=${$(this).data("name")}]`)
                .removeClass("active");
        }
        menuItems.removeClass("active");
        selections.removeClass("active");
        $(this).addClass("active");
        area.find(`[name=${$(this).data("name")}]`).addClass("active");
    });

    $(".button-mode").on("click", function () {
        buttonModes.removeClass("active");
        $(this).addClass("active");
    });

    // changes
});
