import angular from 'angular';
import controller from './navbar.controller';

import template from './navbar.html';
import './navbar.styl';

let navbarComponent = function() {
    return {
        template : template,
        controller : controller,
        restrict : 'E',
        controllerAs : 'vm',
        scope : {},
        bindToController : true
    }
};

export default navbarComponent;
