import * as angular from 'angular';
var uiRouter = require('angular-ui-router');
import taskDetailComponent from './taskDetail.component';

let taskDetailModule = angular.module('taskDetail', [
	uiRouter
])
.directive('taskDetail', taskDetailComponent);

export default taskDetailModule;
