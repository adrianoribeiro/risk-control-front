angular.module('riskControl')
	.controller('CustomerController'
		, function($scope, $rootScope, $routeParams, $location
						,customerResource, riskResource,  messageService){

	$scope.customer = {};
	$scope.risks = {};
	$scope.messageError = '';
	
	$scope.save = function(){
		
		if($scope.customerForm.$valid){
			
			if($scope.customer.id){
				
				customerResource.update(
					{id: $scope.customer.id}
					, $scope.customer
					, function(response){
						
						messageService.setData("Customer was updated success.");
						$scope.customer = {}
						$location.path('/customers');
					}
					,function(error){
						$scope.messageError = error.data.message;
					});
			}else{
				customerResource.save(
					$scope.customer
					, function(response){
						
						messageService.setData("Customer was created success");
						$scope.customer = {}
						$location.path('/customers');
					}
					,function(error){
						$scope.messageError = error.data.message;
					});
			}
		}
	}
	
	var init = function(){
		
		if($routeParams.customerId){
			
			customerResource.get({id: $routeParams.customerId},
				function(response){
					$scope.customer = response;
				},function(error){
					$scope.message = 'Customer not found';
				})
		}
		
		riskResource.query(function(risks){
			$scope.risks = risks;
		},function(error){
			console.log(error);
		});		
	}
	
	init();
});