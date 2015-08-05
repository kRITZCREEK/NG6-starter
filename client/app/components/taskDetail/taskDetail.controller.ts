import * as angular from 'angular';

class TaskDetailController {
    name: string;
    taskId: string;
    static $inject = ['$scope', '$stateParams']
	  constructor($scope : angular.IScope, $stateParams : any){
		    this.name = 'taskDetail';
        this.taskId = $stateParams.taskId;
        console.log($stateParams)
	  }
}


export default TaskDetailController;
