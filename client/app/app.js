import angular from 'angular';
import uiRouter from 'angular-ui-router';

import jquery from 'jquery';
window.jQuery = jquery;
import '../../semantic/dist/semantic.min.css';

import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/common';



angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
])
.directive('app', AppComponent);
