import template from './tasklist.html';
import controller from './tasklist.controller';
import './tasklist.styl';

let tasklistComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default tasklistComponent;