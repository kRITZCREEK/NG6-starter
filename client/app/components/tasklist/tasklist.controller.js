import moment from 'moment';

class TasklistController {
    constructor(camundaService){
        this.camundaService = camundaService;
        this.camundaUri = 'localhost:8080/camunda/api/engine/engine/default';
        this.getTasks();
    }

    getTasks() {
        this.camundaService.getAllTasks().then(tasks => {
            this.tasks = tasks;
        })
    }

    prettyDate(s) {
        return moment(s).fromNow();
    }
}

TasklistController.$inject = ['camundaService'];

export default TasklistController;
