import angular from 'angular';
import Navbar from './navbar/navbar';
import Services from './services/services';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Services.name
]);

export default commonModule;
