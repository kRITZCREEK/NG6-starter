import * as angular from 'angular';
var uiRouter : string = require('angular-ui-router');
import heroComponent from './hero.component'; 

let heroModule = angular.module('hero', [
	uiRouter
])
.directive('hero', heroComponent);

export default heroModule;