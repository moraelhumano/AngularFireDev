(function () {
    'use strict';

    angular
        .module('myApp')
        .component('navComponent', {
            templateUrl: 'components/navComponent/navComponent.html',
            controller: navCtrl,
            controllerAs: 'vm'
        });

        navCtrl.$inject = ['$firebaseArray']
        function navCtrl($firebaseArray) {
        var vm = this;

              $('.parallax').parallax();

            

    }


    })();
