(function() {

  'use strict'

  angular
    .module('myApp')
    .config(config)

  config.$inject = ['$routeProvider']

  function config($routeProvider) {

    $routeProvider
      .when('/main', {
        template: '<main-component></main-component>',
      })

      .when('/ex', {
        template: '<ex-component></ex-component>',
      })

      .when('/chat', {
        template: '<chat-component></chat-component>',
      })

      .when('/admin', {
        template: '<admin-component></admin-component>',
      })
      /*.when('/task/:id', {
        template: '<details-component />'
      })*/

      .otherwise({
        redirectTo: '/main'
      })
  }
})()
