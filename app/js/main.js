(function() {
    'use strict';

    angular
        .module('routing', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });



            $stateProvider
                .state('portfolio', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: '../partials/portfolio.html',
                             controller: 'mainController',
                            controllerAs: 'vm'
                        },
                    }
                })

            $stateProvider
                .state('singleProject', {
                    url: '/projects/:id',
                    views: {
                        'content': {
                            templateUrl: '../partials/singleProject.html',
                            controller: 'projectsController',
                            controllerAs: 'vm'
              },
           }
        })

            $stateProvider
                .state('contact', {
                    url: '/contact',
                    views: {
                        'content': {
                            templateUrl: '../partials/contact.html',
                        },
                    }
                })

         $stateProvider
                .state('about', {
                    url: '/about',
                    views: {
                        'content': {
                            templateUrl: '../partials/about.html',
                        },
                    }
                })

        });

     $(".menu").click(function() {
        $(this).parent().toggleClass("close");
    });

     $(".section-static").click(function() {
        $(this).parent().toggleClass("close");
    });

     $(".cover2").click(function() {
        $(this).parent().parent().parent().toggleClass("close");
    });

})();
