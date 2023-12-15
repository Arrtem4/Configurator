$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".configurator-area .menu-item");
    let selections = $(".configurator-area .selection");
    let buttonModeArr = $(".configurator-area .button-mode");
    let buttonMaterialArr = $(".configurator-area .button-material");
    let colorArr = $(".configurator-area .color");

    // actions
    $(document).click(function (event) {
        if (!$(event.target).closest("#configurator-area").length) {
            selections.removeClass("active");
            menuItems.removeClass("active");
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

    $(".configurator-area .button-mode").on("click", function () {
        buttonModeArr.removeClass("active");
        $(this).addClass("active");
    });

    $(".configurator-area .button-material").on("click", function () {
        buttonMaterialArr.removeClass("active");
        colorArr.removeClass("active");
        $(this).addClass("active");
        area.find(`[name=facade-palette-${$(this).data("value")}]`).addClass(
            "active"
        );
    });

    $(".configurator-area .color-item-facade").on("click", function () {
        $(".configurator-area .layer-facade").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    $(".configurator-area .color-item-plinth").on("click", function () {
        $(".configurator-area .layer-plinth").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    $(".configurator-area .color-item-angles").on("click", function () {
        $(".configurator-area .layer-angles").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    // changes
});
