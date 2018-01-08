angular.module('riskControl', ['ngRoute', 'myServices'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/customers', {
		templateUrl: 'partials/main.html',
		controller: 'CustomersController'
	});
	
	$routeProvider.when('/customers/new', {
		templateUrl: 'partials/form.html',
		controller: 'CustomerController'
	});
	
	$routeProvider.when('/customers/edit/:customerId', {
		templateUrl: 'partials/form.html',
		controller: 'CustomerController'
	});

	$routeProvider.otherwise({redirectTo: '/customers'});
});
