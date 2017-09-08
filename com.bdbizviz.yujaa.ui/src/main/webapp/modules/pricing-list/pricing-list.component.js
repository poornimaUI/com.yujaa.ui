angular.
	module('yujaaApp').
	component('pricingList',{
		templateUrl: 'modules/pricing-list/pricing-list.component.html',
		controller: function PricingListController($scope, $location){
			var path;
			$scope.gotoSignUp = function () {
					this.path = '/paidregistration';
				  $location.path(this.path);
				};
		}
	});