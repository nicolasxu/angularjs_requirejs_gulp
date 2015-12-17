define(['clientModule'], function() {

	return configFunc;

	function configFunc(module) {
		console.log('configuring app routes');

		// module.config(function(){
		// 	alert('configuring');
		// });
		module.config(routeConfigFunc);


		routeConfigFunc.$inject = ['$routeProvider', '$locationProvider'];
		function routeConfigFunc($routeProvider, $locationProvider) {
			//alert('configuring routes');
			$routeProvider
				.when('/client',{
					templateUrl:'/app/client/client.html',
					controller: 'clientController',
					controllerAs: 'clientVm'
			})
				.when('/vendor', {
					templateUrl: '',
					controller: 'vendorController',
					controllerAs: 'vendorVm',
					resolve: {}
				})
					.otherwise('/');

			//$locationProvider.html5Mode(true);

		}

	}


});