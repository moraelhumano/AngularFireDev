(function() {
    'use strict'

    angular
        .module('myApp', ['ngRoute','ngResource' ,'firebase'])
        .config(function() {
            let config = {
              apiKey: "AIzaSyAM0n2N5U7l4pHxscQ1Pcv_baYPTkMfgq4",
              authDomain: "desarrolloweb-1bcb8.firebaseapp.com",
              databaseURL: "https://desarrolloweb-1bcb8.firebaseio.com",
            }
            firebase.initializeApp(config)

        })
})();
