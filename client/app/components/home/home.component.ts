var template = require('./home.html');
require('./home.styl');

import controller from './home.controller';

let homeComponent = function() : angular.IDirective{
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