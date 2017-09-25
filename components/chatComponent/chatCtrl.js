(function () {
    'use strict';

    angular
        .module('myApp')
        .component('chatComponent', {
            templateUrl: 'components/chatComponent/chatComponent.html',
            controller: chatCtrl,
            controllerAs: 'vm'
        });

        chatCtrl.$inject = ['$firebaseArray','$scope','chatData']
        function chatCtrl($firebaseArray,$scope,chatData) {
        var vm = this;
        vm.chatData = chatData;
        $scope.messages = chatData;
      




        console.log(chatData)

    // this uses AngularFire to create the synchronized array
    // a method to create new messages; called by ng-submit
       $scope.addMessage = function() {
         // calling $add on a synchronized array is like Array.push(),
         // except that it saves the changes to our database!
         $scope.messages.$add({
           titulo: $scope.titulo,
           autor: $scope.autor,
           fecha: $scope.fecha,
           link: $scope.link
         });

         // reset the message input
         $scope.titulo = "";
         $scope.autor = "";
         $scope.fecha = "";
         $scope.link = "";
       };





    }


    })();
