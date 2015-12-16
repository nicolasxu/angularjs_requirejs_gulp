requirejs.config({
    baseUrl: '',
    paths: {
    	angular: "bower_components/angular/angular",
    	jquery: "bower_components/jquery/dist/jquery",
    	appModule: "app/appModule"
    },
    shim: {
    	'angular': {
    		deps: [],
    		exports: 'angular'
    	}, 
    	'jquery': {
    		deps: [],
    		exports: 'jquery'
    	}
    }
});

requirejs(['appModule'], function(){
	// kick start the application
	
});