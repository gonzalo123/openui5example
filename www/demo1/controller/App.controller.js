sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ris.ui.demo1.controller.App", {

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });

});
