var template = require('./about.html');
import controller from './about.controller';
require('./about.styl');

let aboutComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default aboutComponent;