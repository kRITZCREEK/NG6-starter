/// <reference path="../../../typings/tsd.d.ts" />

import * as angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Services from './services/services';

let commonModule = angular.module('app.common', [
	Navbar.name,
	Hero.name,
	User.name,
	Services.name
]);

export default commonModule;
