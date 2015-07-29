/// <reference path="../../../typings/tsd.d.ts" />

import * as angular from 'angular';
import Navbar from './navbar/navbar';
var Hero = require('./hero/hero');
var User = require('./user/user');

let commonModule = angular.module('app.common', [
	Navbar.name,
	Hero.name,
	User.name
]);

export default commonModule;
