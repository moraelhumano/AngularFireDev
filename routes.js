(function() {

  'use strict'

  angular
    .module('myApp')
    .config(config)

  config.$inject = ['$routeProvider']

  function config($routeProvider) {

    $routeProvider
      .when('/input', {
        template: '<chat-component></chat-component>',
      })

      .when('/books', {
        template: '<admin-component></admin-component>',
      })
      /*.when('/task/:id', {
        template: '<details-component />'
      })*/

      .otherwise({
        redirectTo: '/input'
      })
  }
})()
