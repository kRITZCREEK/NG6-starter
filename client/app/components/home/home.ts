import * as angular from 'angular';
var uiRouter:string = require('angular-ui-router');
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
])
    .config(($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) => {
        //$urlRouterProvider.otherwise('/');
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
