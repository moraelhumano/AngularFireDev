(function() {
    'use strict'

    angular
        .module('myApp', ['ngRoute','ngResource' ,'firebase'])
        .config(function() {
            let config = {
                apiKey: "AIzaSyDxLSITJcdWINMHR-Q21kwFL2nlujj3TGs",
                authDomain: "prueba-646fe.firebaseapp.com",
                databaseURL: "https://prueba-646fe.firebaseio.com"
            }
            firebase.initializeApp(config)

        })
})();
