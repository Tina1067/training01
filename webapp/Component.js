sap.ui.define([
		"sap/ui/core/UIComponent"
	], function (UIComponent) {
		"use strict";

		return UIComponent.extend("de.integrata.training.Component", {

			metadata : {
				name: "Meine App",
				version: "0.5",
				dependencies:  {
					libs: ["sap.m"]
				},
				rootView: {
					viewName: "de.integrata.training.view.App",
					type: "XML"
				},
				routing: {
					config: {
						routerClass: sap.m.Router,
						viewType: "XML",
						viewPath: "de.integrata.training.view",
						controlId: "app",
						controlAggregation: "pages",
						transition: "slide",
						async: true
					},
					routes: [
						{
							pattern: "",
							name: "initial",
							target: [
								"list"
							]					
						},
						{
							pattern: "{customerId}",
							name: "customerDetails",
							target: [
								"details"
							]
						}
					],
					targets: {
						list: {
							viewName: "List"
						},
						details: {
							viewName: "Customer"
						}
					}
				}
			},
			init : function () {
				UIComponent.prototype.init.apply(this, arguments);
				
				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleUrl: "i18n/i18n.properties"
				});
				this.setModel(i18nModel, "i18n");
				
				var oData = {
					value1: 50,
					value2: 75
				};
				var oModel = new sap.ui.model.json.JSONModel(oData);
				this.setModel(oModel, "dataModel");
				
				/*var oFlugkundenModel = new sap.ui.model.json.JSONModel("model/flugkunden.json");
				this.setModel(oFlugkundenModel, "flugkundenModel");*/
				var oFlugkundenModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_FLUGKUNDEN_001_SRV", {
					disableHeadRequestForToken: true,
					useBatch: false
				});
				this.setModel(oFlugkundenModel, "flugkundenModel");
				this.getRouter().initialize();
			}
		});
	}
);