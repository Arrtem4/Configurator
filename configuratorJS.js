$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".menu-item");
    let selections = $(".selection");
    let buttonModeArr = $(".button-mode");
    let buttonMaterialArr = $(".button-material");
    let colorArr = $(".color");

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

    $(".button-mode").on("click", function () {
        buttonModeArr.removeClass("active");
        $(this).addClass("active");
    });

    $(".button-material").on("click", function () {
        buttonMaterialArr.removeClass("active");
        colorArr.removeClass("active");
        $(this).addClass("active");
        area.find(`[name=facade-palette-${$(this).data("value")}]`).addClass(
            "active"
        );
    });

    $(".color-item-facade").on("click", function () {
        $(".layer-facade").prop("src", `${$(this).data("value")}`);
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    $(".color-item-plinth").on("click", function () {
        $(".layer-plinth").prop("src", `${$(this).data("value")}`);
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    $(".color-item-angles").on("click", function () {
        $(".layer-angles").prop("src", `${$(this).data("value")}`);
        selections.removeClass("active");
        menuItems.removeClass("active");
    });

    // changes
});
