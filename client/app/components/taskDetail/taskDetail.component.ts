var template = require('./taskDetail.html');
import controller from './taskDetail.controller';
require('./taskDetail.styl');

let taskDetailComponent = function(){
	  return {
		    template,
		    controller,
		    restrict: 'E',
		    controllerAs: 'vm',
		    scope: {},
		    bindToController: true
	  };
};

export default taskDetailComponent;
