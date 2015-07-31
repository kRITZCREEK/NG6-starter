import * as angular from 'angular';
var uiRouter : string =  require('angular-ui-router');
import aboutComponent from './about.component'; 

let aboutModule = angular.module('about', [
	uiRouter
])
.config(($stateProvider : angular.ui.IStateProvider)=>{
	$stateProvider
		.state('about', {
			url: '/about',
			template: '<about></about>'
		});
})
.directive('about', aboutComponent);

export default aboutModule;