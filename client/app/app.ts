/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular';

var jquery : any = require('jquery');
(<any>window).jQuery = jquery;

import '../../semantic/dist/semantic.min.css';

var uiRouter : string = require('angular-ui-router');
import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/common';



angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
])
.directive('app', AppComponent);
