import * as angular from 'angular';
var mockData = require('./data.json');

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

export interface ITask {
    id:string, // The id of the task.
    name:string // The tasks name.
    assignee:string, // The user assigned to this task.
    created:Date, // The time the task was created. Format yyyy-MM-dd'T'HH:mm:ss.
    due:Date, // The due date for the task. Format yyyy-MM-dd'T'HH:mm:ss.
    followUp:Date, // The follow-up date for the task. Format yyyy-MM-dd'T'HH:mm:ss.
    delegationState:string, // The delegation state of the task. Corresponds to the DelegationState enum in the engine. Possible values are RESOLVED and PENDING.
    description:string, // The task description.
    executionId:string, // The id of the execution the task belongs to.
    owner:string, // The owner of the task.
    parentTaskId:string, // The id of the parent task, if this task is a subtask.
    priority:number, // The priority of the task.
    processDefinitionId:string, // The id of the process definition this task belongs to.
    processInstanceId:string, // The id of the process instance this task belongs to.
    caseExecutionId:string, // The id of the case execution the task belongs to.
    caseDefinitionId:string, // The id of the case definition the task belongs to.
    caseInstanceId:string, // The id of the case instance the task belongs to.
    taskDefinitionKey:string // The task definition key.
}

export interface ICamundaService {
    getAllTasks(): angular.IPromise<ITask[]>;
    getNTasks(n:number): angular.IPromise<ITask[]>;
}

class CamundaService implements ICamundaService {
    static $inject = ['$q', '$http'];

    constructor(private $q:angular.IQService, private $http:angular.IHttpService) {
    }

    getAllTasks() {
        var deferred = this.$q.defer();
        deferred.resolve(<ITask[]> mockData);
        return deferred.promise;
    }
    getNTasks(n:number){
        var deferred = this.$q.defer();
        deferred.resolve([<ITask> exampleTask]);
        return deferred.promise;
    }
}

let camundaService = angular.module('camundaService', [])
    .service('camundaService', CamundaService);

export default camundaService;
