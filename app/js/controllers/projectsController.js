(function() {
    'use strict';

    angular
        .module('routing')
        .controller('projectsController', function(API, $stateParams) {
            const vm = this


            vm.project = API.getSingleProject($stateParams.id);
        })

})();
