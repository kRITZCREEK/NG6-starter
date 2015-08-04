import * as angular from 'angular';
import Home from './home/home';
import About from './about/about'; 
import Tasklist from './tasklist/tasklist';

let componentModule = angular.module('app.components', [
	Home.name,
	About.name,
	Tasklist.name
]);

export default componentModule;