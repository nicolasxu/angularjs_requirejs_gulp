requirejs.config({
    baseUrl: '',
    paths: {
    	angular: "bower_components/angular/angular",
    	'angular-route': "bower_components/angular-route/angular-route",
    	jquery: "bower_components/jquery/dist/jquery",
    	appModule: "app/appModule",
    	appRoutes: "app/appRoutes"
    	
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
    	}
    }
});

requirejs(['appModule'], function(){
	// kick start the application
	
});