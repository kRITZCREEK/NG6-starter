/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';

var uiRouter : angular.ui.IState = require('angular-ui-router');
var Common = require('./common/common');
var Components = require('./components/components');
import * as AppComponent from './app.component';

require('normalize.css');

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
])
.directive('app', AppComponent.appComponent);
