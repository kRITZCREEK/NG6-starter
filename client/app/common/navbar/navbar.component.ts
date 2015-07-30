import * as angular from 'angular';
import controller from './navbar.controller';

require('./navbar.styl');

let navbarComponent = function() : angular.IDirective {
    return <angular.IDirective> {
        template : require('./navbar.html'),
        controller : controller,
        restrict : 'E',
        controllerAs : 'vm',
        scope : {},
        bindToController : true
    }
};

export default navbarComponent;
