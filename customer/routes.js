(function() {
  'use strict';

  angular
    .module('customer')
    .config(Config);

  function Config($routeProvider) {
    $routeProvider
      .when('/customers', {
        templateUrl: 'customer/customer.html',
        controller: 'CustomerController',
        controllerAs: 'vm'
      });
  }
})();