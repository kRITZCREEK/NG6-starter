/// <reference path="../../../../typings/tsd.d.ts" />

import * as angular from 'angular';
var uiRouter : angular.ui.IState = require('angular-ui-router');
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
	  uiRouter
])
.directive('navbar', navbarComponent);

export default navbarModule;
