import template from './home.html';
import './home.styl';
import controller from './home.controller';

let homeComponent = function() {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;