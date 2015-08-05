/// <reference path="../../../typings/tsd.d.ts" />

import * as angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Services from './services/services';

let commonModule = angular.module('app.common', [
	Navbar.name,
	User.name,
	Services.name
]);

export default commonModule;
