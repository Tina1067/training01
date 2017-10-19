sap.ui.define([
		"de/integrata/training/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("de.integrata.training.controller.Customer", {
			onInit: function() {
				this.getRouter().getRoute("customerDetails").attachPatternMatched(this._onMasterMatched, this);
			},
			
			_onMasterMatched: function(oEvent) {
				var sCustomerId =  oEvent.getParameter("arguments").customerId;
				var oModel = this.getModel("flugkundenModel");
				
				oModel.metadataLoaded().then(function() {
					var sCustomerPath = oModel.createKey("FlugkundenSet", {
						Customerid :  sCustomerId
					});
					this.getView().bindElement({
						model: "flugkundenModel",
						path: "/" + sCustomerPath
					});
				}.bind(this));
			}
		});
	}
);