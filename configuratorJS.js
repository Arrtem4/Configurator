$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".configurator-area .menu-item");
    let selections = $(".configurator-area .selection");
    let buttonModeArr = $(".configurator-area .button-mode");
    let buttonStyleArr = $(".configurator-area .button-angles-style");
    let buttonFacadeMaterialArr = $(
        ".configurator-area .button-material-facade"
    );
    let buttonPlinthMaterialArr = $(
        ".configurator-area .button-material-plinth"
    );
    let buttonFramingMaterialArr = $(
        ".configurator-area .button-material-framing"
    );
    let buttonAnglesMaterialArr = $(
        ".configurator-area .button-material-angles"
    );
    let buttonInsertsMaterialArr = $(
        ".configurator-area .button-material-inserts"
    );

    //color array
    let colorFacadeArr = $(".configurator-area .color-facade");
    let colorPlinthArr = $(".configurator-area .color-plinth");
    let colorFramingArr = $(".configurator-area .color-framing");
    let colorAnglesArr = $(".configurator-area .color-angles");
    let colorInsertsArr = $(".configurator-area .color-inserts");

    // modes state
    let fullscreen = false;
    let anglesStyleMode = 1;

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
    $(".configurator-area .button-material-framing").on("click", function () {
        buttonFramingMaterialArr.removeClass("active");
        colorFramingArr.removeClass("active");
        $(this).addClass("active");
        if ($(this).data("value") === 0) {
            selections.removeClass("active");
            menuItems.removeClass("active");
            $(".configurator-area .frames-style-hidden").removeClass("show");
            return $(".configurator-area .layer-frames").addClass("disabled");
        } else {
            $(".configurator-area .frames-style-hidden").addClass("show");
            area.find(
                `[name=framing-palette-${$(this).data("value")}]`
            ).addClass("active");
        }
    });
    $(".configurator-area .button-material-angles").on("click", function () {
        buttonAnglesMaterialArr.removeClass("active");
        colorAnglesArr.removeClass("active");
        $(this).addClass("active");
        if ($(this).data("value") === 0) {
            selections.removeClass("active");
            menuItems.removeClass("active");
            $(".configurator-area .angles-style-hidden").removeClass("show");
            return $(".configurator-area .layer-angles").addClass("disabled");
        } else {
            $(".configurator-area .angles-style-hidden").addClass("show");
            area.find(
                `[name=angles-palette-${$(this).data("value")}]`
            ).addClass("active");
        }
    });
    $(".configurator-area .button-material-inserts").on("click", function () {
        buttonInsertsMaterialArr.removeClass("active");
        colorInsertsArr.removeClass("active");
        $(this).addClass("active");
        if ($(this).data("value") === 0) {
            selections.removeClass("active");
            menuItems.removeClass("active");
            $(".configurator-area .inserts-style-hidden").removeClass("show");
            return $(".configurator-area .layer-inserts").addClass("disabled");
        } else {
            $(".configurator-area .inserts-style-hidden").addClass("show");
            area.find(
                `[name=inserts-palette-${$(this).data("value")}]`
            ).addClass("active");
        }
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
    $(".configurator-area .color-item-framing").on("click", function () {
        $(".configurator-area .color-item-framing").removeClass("selected");
        $(this).addClass("selected");
        $(".configurator-area .layer-frames")
            .removeClass("disabled")
            .prop("src", `${$(this).data("value")}`);
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-angles").on("click", function () {
        $(".configurator-area .color-item-angles").removeClass("selected");
        $(this).addClass("selected");
        if (anglesStyleMode === 1) {
            $(".configurator-area .layer-angles")
                .removeClass("disabled")
                .prop("src", `res/angles/solid/${$(this).data("value")}`);
        } else {
            $(".configurator-area .layer-angles")
                .removeClass("disabled")
                .prop("src", `res/angles/dotted/${$(this).data("value")}`);
        }
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-inserts").on("click", function () {
        $(".configurator-area .color-item-inserts").removeClass("selected");
        $(this).addClass("selected");
        $(".configurator-area .layer-inserts")
            .removeClass("disabled")
            .prop("src", `${$(this).data("value")}`);
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
    // style mode
    $(".configurator-area .button-angles-style").on("click", function () {
        buttonStyleArr.removeClass("active");
        $(".configurator-area .color-item-angles").removeClass("selected");
        $(this).addClass("active");
        anglesStyleMode = $(this).data("value");
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
