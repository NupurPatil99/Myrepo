//@ui5-bundle ns/Firstcard/Component-preload.js
sap.ui.require.preload({
	"ns/Firstcard/manifest.json":'{"_version":"1.14.0","sap.app":{"id":"ns.Firstcard","type":"card","title":"My Card","subTitle":"","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"phone":true,"tablet":true},"icons":{"icon":"sap-icon://list"}},"sap.card":{"type":"List","header":{"title":"List Card with Top 5 Products","subTitle":"These are the top sellers this month","icon":{"src":"./images/HT-6132.jpg"},"status":{"text":"5 of{}"},"data":{"path":"","request":{"url":"{{destinations.Mydestination}}/V2/Northwind/Northwind.svc/Invoices/$count"}},"type":"Numeric","mainIndicator":{"number":"{}","unit":"invoices","trend":"{=${} <2000 ? \'Up\' :\'Down\'}","state":"{=${} <2000 ? \'Good\' :\'Critical\'}"},"unitOfMeasurement":"EUR","sideIndicators":[{"title":"Target","number":"2000","unit":"Invoices","state":"Good"},{"title":"Deviation","number":"{=${} - 2000}","unit":"Invoices","state":"{=${} - 2000 > 0? \'Critical\' :\'Good\'}"}]},"content":{"data":{"request":{"url":"{{destinations.Mydestination}}/V2/Northwind/Northwind.svc/Invoices/","parameters":{"$filter":"substringof(\'{filters>/SearchProduct/value}\',ProductName) eq true and CustomerID eq \'{filters>/searchCustID/value}\'"}},"path":"/d/results"},"item":{"title":"CustomerID {CustomerID},{CustomerName}","description":"{ProductID},ProductName {ProductName}","highlight":"{=${UnitPrice} <30 ? \'Success\' :\'Warning\'}","info":{"value":"{UnitPrice}"}},"maxItems":5},"configuration":{"destinations":{"Mydestination":{"name":"Northwind","defaultUrl":"/V2/Northwind/Northwind.svc/","label":""}},"parameters":{"selectedCustomerId":{}},"filters":{"SearchProduct":{"type":"Search","value":"","label":"Search"},"searchCustID":{"type":"Select","value":"{parameters>/selectedCustomerId/value}","data":{"request":{"url":"{{destinations.Mydestination}}/V2/Northwind/Northwind.svc/Invoices/"}},"item":{"path":"/d/results","template":{"key":"{CustomerID}","title":"{CustomerID},{CustomerName}"}}}}},"data":{"request":{"url":"{{destinations.Mydestination}}/V2/Northwind/Northwind.svc/Invoices/"},"path":"/d/results"}},"sap.platform.mobilecards":{"compatible":true}}'
});
//# sourceMappingURL=Component-preload.js.map
