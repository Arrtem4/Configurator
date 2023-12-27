$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".configurator-area .menu-item");
    let selections = $(".configurator-area .selection");
    let buttonModeArr = $(".configurator-area .button-mode");
    let buttonFacadeMaterialArr = $(
        ".configurator-area .button-material-facade"
    );
    let buttonPlinthMaterialArr = $(
        ".configurator-area .button-material-plinth"
    );
    let colorFacadeArr = $(".configurator-area .color-facade");
    let colorPlinthArr = $(".configurator-area .color-plinth");
    let fullscreen = false;
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
    // material mode
    $(".configurator-area .button-material-facade").on("click", function () {
        buttonFacadeMaterialArr.removeClass("active");
        colorFacadeArr.removeClass("active");
        $(this).addClass("active");
        area.find(`[name=facade-palette-${$(this).data("value")}]`).addClass(
            "active"
        );
    });
    $(".configurator-area .button-material-plinth").on("click", function () {
        buttonPlinthMaterialArr.removeClass("active");
        colorPlinthArr.removeClass("active");
        $(this).addClass("active");
        area.find(`[name=plinth-palette-${$(this).data("value")}]`).addClass(
            "active"
        );
    });
    // color mode
    $(".configurator-area .color-item-facade").on("click", function () {
        $(".configurator-area .color-item-facade").removeClass("selected");
        $(this).addClass("selected");
        $(".configurator-area .layer-facade").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-plinth").on("click", function () {
        $(".configurator-area .color-item-plinth").removeClass("selected");
        $(this).addClass("selected");
        $(".configurator-area .layer-plinth").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-angles").on("click", function () {
        $(".configurator-area .color-item-angles").removeClass("selected");
        $(this).addClass("selected");
        if ($(this).data("value") === "none") {
            $(".configurator-area .layer-angles").addClass("disabled");
        } else {
            $(".configurator-area .layer-angles")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value")}`);
        }
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-window").on("click", function () {
        $(".configurator-area .color-item-window").removeClass("selected");
        $(this).addClass("selected");
        $(".configurator-area .layer-window").prop(
            "src",
            `${$(this).data("value")}`
        );
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    // fullscreen button
    $(".fullscreen-button").on("click", function () {
        let fullscreenButton = $("#fullscreenButton");
        if (fullscreen) {
            area.appendTo(".container").removeClass("fullscreen");
            fullscreenButton.text("На весь экран");
            fullscreen = false;
        } else {
            area.appendTo("body").addClass("fullscreen");
            fullscreenButton.text("Свернуть");
            fullscreen = true;
        }
    });
});
