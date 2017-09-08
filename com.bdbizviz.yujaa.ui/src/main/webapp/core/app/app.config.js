angular.
	module('yujaaApp').
	config(['$routeProvider',
	        function config($routeProvider){
				$routeProvider.
				when('/pricing', {
					template: '<pricing-list></pricing-list>'
				}).
				when('/paidregistration', {
					template: '<paid-registration></paid-registration>'
				}).
				otherwise({template: '<pricing-list></pricing-list>'});
			}
	        ]);