(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("chatData", chatData);


    chatData.$inject = ["$firebaseArray"];
    function chatData($firebaseArray){
      var ref = firebase.database().ref();

      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);

    }

})();
