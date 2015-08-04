import * as angular from 'angular';
var uiRouter = require('angular-ui-router');
import tasklistComponent from './tasklist.component'; 

let tasklistModule = angular.module('tasklist', [
	uiRouter
])
.directive('tasklist', tasklistComponent);

export default tasklistModule;