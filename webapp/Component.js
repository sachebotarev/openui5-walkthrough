sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/wt/controller/HelloDialog",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, ODataModel, Device) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.wt.Component", {

        metadata : {
            manifest: "json"
        },

        init : function () {

            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel=new JSONModel(oData);
            this.setModel(oModel);
            // set invoice model - local
            this.getModel("invoice").setUseBatch(false);
            // set dialog
            this.helloDialog = new HelloDialog();
            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            this.getRouter().initialize();
        },

        getContentDensityClass : function() {
        if (!this._sContentDensityClass) {
            if (!sap.ui.Device.support.touch) {
                this._sContentDensityClass = "sapUiSizeCompact";
            } else {
                this._sContentDensityClass = "sapUiSizeCozy";
            }
        }
        return this._sContentDensityClass;
    }
    });

});