var template = require('./<%= name %>.html');
import controller from './<%= name %>.controller';
require('./<%= name %>.styl');

let <%= name %>Component = function(){
	  return {
		    template,
		    controller,
		    restrict: 'E',
		    controllerAs: 'vm',
		    scope: {},
		    bindToController: true
	  };
};

export default <%= name %>Component;
