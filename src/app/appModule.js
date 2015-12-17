define(['appRoutes'],function(appRoutes){

	
	var appModule = angular.module('appModule', ['ngRoute', 'clientModule']);
	appRoutes(appModule);
	angular.bootstrap(document, ['appModule']);




}); 