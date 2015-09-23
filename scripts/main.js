// create the module and name it weddingApp
var weddingApp = angular.module('weddingApp', ['ngRoute', 'timer', 'ui.bootstrap', 'bootstrapLightbox']);

weddingApp.config(function($routeProvider, $locationProvider) {
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
	
	$scope.images = (function() {
		var images = [];
		for (var x=1; x<= 17; x++) {
			var ext = "jpg";
			if (x === 16) {
				ext = "png";
			}
			images.push({
				'url': '/images/gallery/' + x + '.' + ext,
				'thumbUrl': '/images/gallery/thumbnails/' + x + '.' + ext
			});
		}
		return images;
	})();
});