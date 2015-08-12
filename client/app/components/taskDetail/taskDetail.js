import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskDetailComponent from './taskDetail.component';

let taskDetailModule = angular.module('taskDetail', [
  uiRouter
])
.directive('taskDetail', taskDetailComponent);

export default taskDetailModule;
