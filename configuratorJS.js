$(function () {
    // variables
    let area = $(".configurator-area");
    let menuItems = $(".configurator-area .menu-item");
    let selections = $(".configurator-area .selection");
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
    // level buttons
    let levelButtonsArrFacade = $(".configurator-area .button-mode-facade");
    let levelButtonsArrFrame = $(".configurator-area .button-mode-frame");
    let levelButtonsArrAngle = $(".configurator-area .button-mode-angle");
    let levelButtonsArrInsert = $(".configurator-area .button-mode-insert");
    //color array
    let colorFacadeArr = $(".configurator-area .color-facade");
    let colorPlinthArr = $(".configurator-area .color-plinth");
    let colorFramingArr = $(".configurator-area .color-framing");
    let colorAnglesArr = $(".configurator-area .color-angles");
    let colorInsertsArr = $(".configurator-area .color-inserts");
    // modes state
    let fullscreen = false;
    let anglesStyleMode = 1;
    let facadeLevelValue = 0;
    let frameLevelValue = 0;
    let angleLevelValue = 0;
    let insertLevelValue = 0;
    //cache
    $(document).ready(function () {
        $("head").append(
            "<meta http-equiv='Cache-Control' content='max-age=0, must-revalidate'>"
        );
    });
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
    // level mode
    $(".configurator-area .button-mode-facade").on("click", function () {
        levelButtonsArrFacade.removeClass("active");
        $(".configurator-area .color-item-facade").removeClass("selected");
        $(this).addClass("active");
        facadeLevelValue = $(this).data("value");
    });
    $(".configurator-area .button-mode-frame").on("click", function () {
        levelButtonsArrFrame.removeClass("active");
        $(".configurator-area .color-item-framing").removeClass("selected");
        $(this).addClass("active");
        frameLevelValue = $(this).data("value");
    });
    $(".configurator-area .button-mode-angle").on("click", function () {
        levelButtonsArrAngle.removeClass("active");
        $(".configurator-area .color-item-angles").removeClass("selected");
        $(this).addClass("active");
        angleLevelValue = $(this).data("value");
    });
    $(".configurator-area .button-mode-insert").on("click", function () {
        levelButtonsArrInsert.removeClass("active");
        $(".configurator-area .color-item-inserts").removeClass("selected");
        $(this).addClass("active");
        insertLevelValue = $(this).data("value");
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
            $(".configurator-area .layer-frames-1").addClass("disabled");
            $(".configurator-area .layer-frames-2").addClass("disabled");
            $(".configurator-area .color-item-framing").removeClass("selected");
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
            $(".configurator-area .layer-angles-1").addClass("disabled");
            $(".configurator-area .layer-angles-2").addClass("disabled");
            $(".configurator-area .color-item-angles").removeClass("selected");
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
            $(".configurator-area .layer-inserts-1").addClass("disabled");
            $(".configurator-area .layer-inserts-2").addClass("disabled");
            $(".configurator-area .color-item-inserts").removeClass("selected");
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
        if (facadeLevelValue === 0) {
            $(".configurator-area .layer-facade-1").addClass("disabled");
            $(".configurator-area .layer-facade-2").addClass("disabled");
            $(".configurator-area .layer-facade").prop(
                "src",
                `${$(this).data("value")}`
            );
        } else if (facadeLevelValue === 1) {
            $(".configurator-area .layer-facade-1")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value1")}`);
        } else {
            $(".configurator-area .layer-facade-2")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value2")}`);
        }
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
        if (frameLevelValue === 0) {
            $(".configurator-area .layer-frames-1").addClass("disabled");
            $(".configurator-area .layer-frames-2").addClass("disabled");
            $(".configurator-area .layer-frames")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value")}`);
        } else if (frameLevelValue === 1) {
            $(".configurator-area .layer-frames-1")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value1")}`);
        } else {
            $(".configurator-area .layer-frames-2")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value2")}`);
        }
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-angles").on("click", function () {
        $(".configurator-area .color-item-angles").removeClass("selected");
        $(this).addClass("selected");
        if (anglesStyleMode === 1) {
            if (angleLevelValue === 0) {
                $(".configurator-area .layer-angles-1").addClass("disabled");
                $(".configurator-area .layer-angles-2").addClass("disabled");
                $(".configurator-area .layer-angles")
                    .removeClass("disabled")
                    .prop("src", `res/angles/solid/${$(this).data("value")}`);
            } else if (angleLevelValue === 1) {
                $(".configurator-area .layer-angles").addClass("disabled");
                $(".configurator-area .layer-angles-1")
                    .removeClass("disabled")
                    .prop("src", `res/angles/solid/${$(this).data("value1")}`);
            } else {
                $(".configurator-area .layer-angles").addClass("disabled");
                $(".configurator-area .layer-angles-2")
                    .removeClass("disabled")
                    .prop("src", `res/angles/solid/${$(this).data("value2")}`);
            }
        } else {
            if (angleLevelValue === 0) {
                $(".configurator-area .layer-angles-1").addClass("disabled");
                $(".configurator-area .layer-angles-2").addClass("disabled");
                $(".configurator-area .layer-angles")
                    .removeClass("disabled")
                    .prop("src", `res/angles/dotted/${$(this).data("value")}`);
            } else if (angleLevelValue === 1) {
                $(".configurator-area .layer-angles").addClass("disabled");
                $(".configurator-area .layer-angles-1")
                    .removeClass("disabled")
                    .prop("src", `res/angles/dotted/${$(this).data("value1")}`);
            } else {
                $(".configurator-area .layer-angles").addClass("disabled");
                $(".configurator-area .layer-angles-2")
                    .removeClass("disabled")
                    .prop("src", `res/angles/dotted/${$(this).data("value2")}`);
            }
        }
        selections.removeClass("active");
        menuItems.removeClass("active");
    });
    $(".configurator-area .color-item-inserts").on("click", function () {
        $(".configurator-area .color-item-inserts").removeClass("selected");
        $(this).addClass("selected");
        if (insertLevelValue === 0) {
            $(".configurator-area .layer-inserts-1").addClass("disabled");
            $(".configurator-area .layer-inserts-2").addClass("disabled");
            $(".configurator-area .layer-inserts")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value")}`);
        } else if (insertLevelValue === 1) {
            $(".configurator-area .layer-inserts-1")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value1")}`);
        } else {
            $(".configurator-area .layer-inserts-2")
                .removeClass("disabled")
                .prop("src", `${$(this).data("value2")}`);
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
            let newArea = area.detach();
            newArea.appendTo(".container").removeClass("fullscreen");
            fullscreenButton.text("На весь экран");
            fullscreen = false;
        } else {
            let newArea = area.detach();
            newArea.appendTo("body").addClass("fullscreen");
            fullscreenButton.text("Свернуть");
            fullscreen = true;
        }
    });
});
