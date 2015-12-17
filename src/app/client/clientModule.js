define(function(){
	// clientModule
	angular.module('clientModule', [])
		.controller('clientController', clientControllerFunc);

	clientControllerFunc.$inject = [];
	function clientControllerFunc() {
		var clientVm = this;
		clientVm.list = ['client 1', 'client 2', 'client 3'];


	}
});