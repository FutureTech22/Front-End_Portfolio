(function() {
    'use strict';

    angular
        .module('routing')
        .controller('mainController', function(API) {
            const vm = this

            vm.projects = API.getProjects();


        })

})();
