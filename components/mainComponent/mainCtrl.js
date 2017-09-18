(function () {
    'use strict';

    angular
        .module('myApp')
        .component('mainComponent', {
            templateUrl: 'components/mainComponent/mainComponent.html',
            controller: mainCtrl,
            controllerAs: 'vm'
        });

        mainCtrl.$inject = ['$firebaseArray', 'charactersData']
        function mainCtrl($firebaseArray, charactersData) {
        var vm = this;
        $('.parallax').parallax();

              vm.charactersData =  charactersData.query();
              console.log(vm.charactersData);



    }


    })();
