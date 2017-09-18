(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("exData", exData);


    exData.$inject = ["$resource"];
    function exData($resource){
        return $resource("services/ex.json")
    }



})();
