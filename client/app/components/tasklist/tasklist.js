import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tasklistComponent from './tasklist.component';

let tasklistModule = angular.module('tasklist', [
  uiRouter
])
.directive('tasklist', tasklistComponent);

export default tasklistModule;
