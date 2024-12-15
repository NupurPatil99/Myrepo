/**
 * This module was created by the BASEditor
 */
sap.ui.define(["sap/ui/integration/Designtime"], function (
    Designtime
) {
    "use strict";
    return function () {
        return new Designtime({
	"form": {
		"items": {
			"selectedCustomerId": {
				"manifestpath": "/sap.card/configuration/parameters/selectedCustomerId/value",
				"translatable": false
			}
		}
	},
	"preview": {
		"modes": "Abstract"
	}
});
    };
});