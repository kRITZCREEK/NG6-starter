import * as angular from 'angular';
var uiRouter = require('angular-ui-router');
import <%= name %>Component from './<%= name %>.component'; 

let <%= name %>Module = angular.module('<%= name %>', [
	uiRouter
])
.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
