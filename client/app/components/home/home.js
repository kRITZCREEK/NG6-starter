import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/task');
        $stateProvider
            .state('home', {
                url: '/task',
                template: '<home></home>'
            })
            .state('home.detail', {
                url: '/:taskId',
                views:{
                    'detail':{
                        template: '<task-detail></task-detail>'
                    }
                }
            });
    })
    .directive('home', homeComponent);

export default homeModule;
