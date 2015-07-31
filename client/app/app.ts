/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';

var uiRouter : string = require('angular-ui-router');
import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/common';

require('normalize.css');

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
])
.directive('app', AppComponent);
