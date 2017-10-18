sap.ui.controller("controller.App", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf controller.App
	 */
	onInit: function() {
		var oData = {
			value1: 50,
			value2: 75
		};
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
		sap.ui.getCore().setModel(oModel,"dataModel");
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf controller.App
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf controller.App
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf controller.App
	 */
	//	onExit: function() {
	//
	//	}

	onSliderChange: function(oEvent) {
		alert("Du hast den " +
			oEvent.getSource().getId() +
			" auf " +
			oEvent.getSource().getValue() +
			" verschoben");
	}
});