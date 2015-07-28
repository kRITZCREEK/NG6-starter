/// <reference path="../../typings/tsd.d.ts" />

var template = require('./app.html');
require('./app.styl');

export function appComponent () : angular.IDirective {
    var directive : angular.IDirective = <angular.IDirective> {};
    directive.restrict = 'E';
    directive.template = template;
    return directive;
};
