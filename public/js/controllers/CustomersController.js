angular.module('riskControl')
	.controller('CustomersController'
		, function($scope, $rootScope, customerResource, messageService){

	$scope.customers = [];
	$scope.message = messageService.getData();
	
	customerResource.query(function(response) {
		$scope.customers = response;
	}, function(error) {
		console.log(error);
	});
	
	$scope.remover = function(customer){
		
		customerResource.delete({id: customer.id}, function(){
			let indexCustomer = $scope.customers.indexOf(customer);
			$scope.customers.splice(indexCustomer, 1);
			
			$scope.message = 'Customer '+ customer.name +' was removed success.';
		},function(error){
			console.log(error);
		});
	}
});