sap.ui.define([
    "sap/ui/base/Object"
], function (UI5Object) {
    "use strict";

    return UI5Object.extend("ris.ui.demo1.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        open: function () {
            var oView = this._oView;
            var oDialog = oView.byId("helloDialog");


            if (!oDialog) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oDialog.close();
                    }
                };
                oDialog = sap.ui.xmlfragment(oView.getId(), "ris.ui.demo1.view.HelloDialog", oFragmentController);
                oView.addDependent(oDialog);
            }
            oDialog.open();
        }

    });

});