import * as angular from 'angular';
var Home = require('./home/home');
var About = require('./about/about'); 

let componentModule = angular.module('app.components', [
	Home.name,
	About.name
]);

export default componentModule;