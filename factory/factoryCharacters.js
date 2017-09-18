(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("charactersData", charactersData);


    charactersData.$inject = ["$resource"];
    function charactersData($resource){
        return $resource("services/characters.json")
    }



})();
