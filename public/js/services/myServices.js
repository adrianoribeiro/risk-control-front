angular.module('myServices', ['ngResource'])
.factory('customerResource', function($resource){
	return $resource('http://localhost:63819/v1/customers/:id', null, {
		
		'update': {
			method: 'PUT'
		}
	});	
})

.factory('riskResource', function($resource){
	return $resource('http://localhost:63819/v1/customers/risks');
})

.factory('messageService',function(){

    var data="";

    return{
        setData:function(str){
            data = str;
        },

        getData:function(){
            return data;
        }
    }
})