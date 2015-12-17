requirejs.config({
    baseUrl: '',
    paths: {
    	angular: "bower_components/angular/angular",
    	'angular-route': "bower_components/angular-route/angular-route",
    	jquery: "bower_components/jquery/dist/jquery",
    	appModule: "app/appModule",
    	appRoutes: "app/appRoutes",
    	'clientModule': "app/client/clientModule",
    	'vendorModule': "app/vendor/vendorModule"
    	
    },
    bundles: {

    },
    shim: {
    	'appModule': {
    		deps: ['angular-route', 'appRoutes']
    	}, 
    	'angular-route': {
    		deps: ['angular']
    	}, 
    	'angular': {
    		deps: ['jquery']
    	}, 
    	'clientModule': {
    		deps: ['angular-route']
    	}
    }
});

requirejs(['appModule'], function(){
	// Application already bootstrapped
	
	
});