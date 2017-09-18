(function () {
    'use strict';

    angular
        .module('myApp')
        .component('exComponent', {
            templateUrl: 'components/exComponent/exComponent.html',
            controller: exCtrl,
            controllerAs: 'vm'
        });

        exCtrl.$inject = ['$firebaseArray', 'exData']
        function exCtrl($firebaseArray, exData) {
        var vm = this;
        $('.parallax').parallax();

              vm.exData =  exData.query();
              console.log(vm.exData);



    }


    })();
