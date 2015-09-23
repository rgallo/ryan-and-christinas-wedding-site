// create the module and name it weddingApp
var weddingApp = angular.module('weddingApp', ['ngRoute', 'timer', 'ui.bootstrap', 'bootstrapLightbox']);

weddingApp.config(function($routeProvider) {
	$routeProvider
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
			controller  : 'galleryController'
		})
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		});
});

weddingApp.controller('mainController', function($scope) {
	// Handle spinner logic
	// http://stackoverflow.com/a/12381623
	$scope.isViewLoading = false;
	$scope.$on('$routeChangeStart', function() {
		$scope.isViewLoading = true;
	});
	$scope.$on('$routeChangeSuccess', function() {
		$scope.isViewLoading = false;
	});
	$scope.$on('$routeChangeError', function() {
		$scope.isViewLoading = false;
	});
});

weddingApp.controller('storyController', function($scope) {

});

weddingApp.controller('infoController', function($scope) {

});

weddingApp.controller('weddingPartyController', function($scope) {
	
});

weddingApp.controller('registryController', function($scope) {

});

weddingApp.controller('galleryController', function($scope, Lightbox) {
	$scope.openLightboxModal = function (index) {
		Lightbox.openModal($scope.images, index);
	};
	
	$scope.images = [
		{
			'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
			'thumbUrl': 'https://farm6.staticflickr.com/5830/20552523531_ef720cd2f1_s.jpg',
			'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
		}
	];
});