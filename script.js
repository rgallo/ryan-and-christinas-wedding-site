/* globals angular */

// create the module and name it weddingApp
var weddingApp = angular.module('weddingApp', ['ngRoute']);

weddingApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

// create the controller and inject Angular's $scope
weddingApp.controller('mainController', function($scope) {
	$scope.message = 'Hello world!';
});

weddingApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

weddingApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});