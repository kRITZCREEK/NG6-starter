import * as angular from 'angular';

export class Task {
  description : string;
  dueDate : Date;
  createDate : Date;
  constructor(description : string, dueDate : Date, createDate : Date){
      this.description = description;
      this.dueDate = dueDate;
      this.createDate = createDate;
  }
}

export interface ICamundaService {
    getAllTasks(): angular.IPromise<Task[]>;
}

let camundaService = angular.module('camundaService', [])
    .factory('camundaService', ['$q', function($q : angular.IQService){
        return {
            getAllTasks() : angular.IPromise<Task[]> {
                let deferred = $q.defer();
                deferred.resolve([new Task('Ein Task', new Date(), new Date())])
                return deferred.promise;
            }
        }
    }])

export default camundaService;
