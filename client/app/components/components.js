import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Tasklist from './tasklist/tasklist';
import Taskdetail from './taskDetail/taskDetail';

let componentModule = angular.module('app.components', [
	  Home.name,
	  About.name,
	  Tasklist.name,
    Taskdetail.name
]);

export default componentModule;
