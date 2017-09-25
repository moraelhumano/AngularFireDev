(function () {
    'use strict';

    angular
        .module('myApp')
        .component('adminComponent', {
            templateUrl: 'components/adminComponent/adminComponent.html',
            controller: adminCtrl,
            controllerAs: 'vm'
        });

        adminCtrl.$inject = ['chatData','$firebaseAuth', '$scope']
        function adminCtrl(chatData,$firebaseAuth, $scope) {
        var vm = this;
        var auth = $firebaseAuth();
        vm.chatData = chatData;

        console.log(vm.chatData)


        auth.$signInWithPopup("google").then(function (result) {

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;

            // The signed-in user info.
            var user = result.user;

            // Loged in correctly
            alert('Inicio de sesión conseguido!');

        })
        .catch(function (error) {

            // Error in login
            console.error(error)
        })



        /*
        vm.signIn = signIn;
        $scope.signIn = function() {
            $scope.firebaseUser = null;
            $scope.error = null;

        auth.$signInAnonymously().then(function(firebaseUser) {
          $scope.firebaseUser = firebaseUser;
        }).catch(function(error) {
            $scope.error = error;
      });
    };*/

    //var provider = new firebase.auth.GoogleAuthProvider();


    /*function login(){
      firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  });



    }

        $('.collapsible').collapsible();





        console.log(chatData)





=======
        adminCtrl.$inject = ['chatData', '$firebaseAuth', '$scope'];

        function adminCtrl(chatData, $firebaseAuth, $scope) {
            var vm = this;
            var auth = $firebaseAuth();
            vm.chatData = chatData;



              /*
              vm.signIn = signIn;
              $scope.signIn = function() {
                  $scope.firebaseUser = null;
                  $scope.error = null;

              auth.$signInAnonymously().then(function(firebaseUser) {
                $scope.firebaseUser = firebaseUser;
              }).catch(function(error) {
                  $scope.error = error;
            });
          };*/
/*
            var provider = new firebase.auth.GoogleAuthProvider();


          firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('Hola1');
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('Hola2')
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

            $('.collapsible').collapsible();
*/

            console.log(chatData)


    }


    })();
