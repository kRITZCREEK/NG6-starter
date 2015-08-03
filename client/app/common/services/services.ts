import * as angular from 'angular';
import CamundaService from './camundaService/camundaService';


let Services =
angular.module('app.services', [
  CamundaService.name
  ])

export default Services;