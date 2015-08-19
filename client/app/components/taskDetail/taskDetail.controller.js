class TaskDetailController {
	  constructor($scope, $stateParams){
		    this.name = 'taskDetail';
        this.taskId = $stateParams.taskId;
        console.log($stateParams);
	  }
}

TaskDetailController.$inject = ['$scope', '$stateParams'];

export default TaskDetailController;
