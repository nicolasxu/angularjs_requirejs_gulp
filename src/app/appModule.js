define(['angular', 'jquery', 'appRoutes'], function(angular, $, appRoutes){

	
	console.log(appRoutes);
	var appModule = angular.module('appModule', []);
	appRoutes(appModule);


}); 