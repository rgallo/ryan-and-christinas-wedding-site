// create the module and name it weddingApp
var weddingApp = angular.module('weddingApp', ['ngRoute']);

weddingApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/story', {
			templateUrl : 'pages/story.html',
			controller  : 'storyController'
		})
		.when('/info', {
			templateUrl : 'pages/info.html',
			controller  : 'infoController'
		})
		.when('/weddingparty', {
			templateUrl : 'pages/weddingparty.html',
			controller  : 'contactController'
		})
		.when('/registry', {
			templateUrl : 'pages/registry.html',
			controller  : 'registryController'
		})
		.when('/gallery', {
			templateUrl : 'pages/gallery.html',
			controller  : 'contactController'
		});
});

weddingApp.controller('mainController', function($scope) {

});

weddingApp.controller('storyController', function($scope) {

});

weddingApp.controller('infoController', function($scope) {

});

weddingApp.controller('weddingPartyController', function($scope) {
	
});

weddingApp.controller('registryController', function($scope) {

});

weddingApp.controller('galleryController', function($scope) {

});