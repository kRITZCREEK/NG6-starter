import angular from 'angular';
import mockData from './data.json';

// Reference: http://docs.camunda.org/latest/api-references/rest/#task

let exampleTask =
{
    id: "anId",
    name: "aName",
    assignee: "anAssignee",
    created: new Date("2013-01-23T13:42:42"),
    due: new Date("2013-01-23T13:49:42"),
    followUp: new Date("2013-01-23T13:44:42"),
    delegationState: "RESOLVED",
    description: "aDescription",
    executionId: "anExecution",
    owner: "anOwner",
    parentTaskId: "aParentId",
    priority: 42,
    processDefinitionId: "aProcDefId",
    processInstanceId: "aProcInstId",
    caseDefinitionId: "aCaseDefId",
    caseInstanceId: "aCaseInstId",
    caseExecutionId: "aCaseExecution",
    taskDefinitionKey: "aTaskDefinitionKey"
};

class CamundaService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
    }

    getAllTasks() {
        var deferred = this.$q.defer();
        deferred.resolve(mockData);
        return deferred.promise;
    }
    getNTasks(n){
        var deferred = this.$q.defer();
        deferred.resolve([exampleTask]);
        return deferred.promise;
    }
}

CamundaService.$inject = ['$q', '$http'];

let camundaService = angular.module('camundaService', [])
    .service('camundaService', CamundaService);

export default camundaService;
