(function() {
  'use strict';

  angular
    .module('customer')
    .controller('CustomerController', CustomerController);

  CustomerController.$inject = ['CustomerService'];

  function CustomerController(CustomerService) {
    var vm = this;
    vm.empty = {};

    vm.findAll = function() {
      CustomerService.findAll().then(function(response) {
        vm.customers = response.data;
      }, function(error) {
        console.error(error);
      })
    }

    vm.findAll();

    vm.reset = function() {
      vm.customer = angular.copy(vm.empty);
    }

    vm.populate = function(customer) {
      vm.customer = angular.copy(customer); 
    }

    vm.save = function(customer) {
      if (customer._id) {
        CustomerService.update(customer).then(function(response) {
          vm.success = response.data;
          vm.findAll();
          vm.reset();
        }, function(error) {
          console.log(error);
          vm.error = error.data;
        })
      } else {
        CustomerService.create(customer).then(function(response) {
          vm.success = response.data;
          vm.findAll();
          vm.reset();
        }, function(error) {
          console.log(error);
          vm.error = error.data;
        })
      }
    }

    vm.remove = function(customer) {
      if (confirm('Confirma a remoção da cervejaria ' + customer.name + '?')) {
        CustomerService.remove(customer._id).then(function(response) {
          vm.success = response.data;
          vm.findAll();
        }, function(error) {
          console.log(error);
          vm.error = error.data;
        })
      }
    }
  }
})();