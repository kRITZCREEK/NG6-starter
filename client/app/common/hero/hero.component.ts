/// <reference path="../../../../typings/tsd.d.ts" />

declare function require(s: string): string;

var template = require('./hero.html');
import controller from './hero.controller';
import './hero.styl';

let heroComponent = function() : angular.IDirective{
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default heroComponent;