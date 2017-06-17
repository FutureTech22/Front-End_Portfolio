(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {

            let data = [
                { "id": 0, "name": "Shopular", "img": '/Portfolio_Screenshots/shopular.png' },
                { "id": 1, "name": "Node.js Blog", "img": '/Portfolio_Screenshots/nodeBlog.png' },
                { "id": 2, "name": "Pollution App", "img": '/Portfolio_Screenshots/pollutionApp.png' },
                { "id": 3, "name": "Todo List", "img": '/Portfolio_Screenshots/todoList.png' },
                { "id": 4, "name": "Weather App", "img": '/Portfolio_Screenshots/weatherApp.png' },
                { "id": 5, "name": "Github Clone", "img": '/Portfolio_Screenshots/githubClone.png' },

            ];

            return {
                getProjects: () => {
                    return data;
                },
                getSingleProject: (id) => {
                    return data[id];
                },
            };
        });
})();
