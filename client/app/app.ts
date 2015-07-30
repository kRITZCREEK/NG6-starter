/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';

var uiRouter : angular.ui.IState = require('angular-ui-router');
import Components from './components/components';
import AppComponent from './app.component';
var Common = require('./common/common').default;

require('normalize.css');

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
])
.directive('app', AppComponent);
