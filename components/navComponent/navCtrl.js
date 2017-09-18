(function () {
    'use strict';

    angular
        .module('myApp')
        .component('navComponent', {
            templateUrl: 'components/navComponent/navComponent.html',
            controller: navCtrl,
            controllerAs: 'vm'
        });

        navCtrl.$inject = ['$firebaseArray', '$firebaseAuth'];
        function navCtrl($firebaseArray, $firebaseAuth) {

            var vm = this;
            var auth = $firebaseAuth();

            vm.loginWithGoogle = loginWithGoogle;

            initialize();

            /**
             * Bootstrap the component
             * */
            function initialize() {
              $('.parallax').parallax();
            }

            /**
             * Make a login with the google strategy
             * */
            function loginWithGoogle() {
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
            }

            

    }


    })();
