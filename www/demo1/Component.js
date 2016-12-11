sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "ris/ui/demo1/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("ris.ui.demo1.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }
    });

});