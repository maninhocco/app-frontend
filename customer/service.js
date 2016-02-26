(function() {
  'use strict';

  angular
    .module('customer')
    .service('CustomerService', CustomerService);

  BreweryService.$inject = ['API','$http'];

  function CustomerService(API, $http) {
    this.findAll = function () {
      return $http.get(API.url + 'customers');
    }
    this.create = function(customer) {
      return $http.post(API.url + 'customers', customer);
    }
    this.update = function(customer) {
      return $http.put(API.url + 'customers/' + customer._id, customer);
    }
    this.remove = function(id) {
      return $http.delete(API.url + 'customers/' + id);
    }
  }
})();