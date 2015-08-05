import {
    ITask,
    ICamundaService
} from '../../common/services/camundaService/camundaService'

var moment = require('moment');

class TasklistController {
    tasks: ITask[];
    camundaUri : string;

    static $inject = ['camundaService'];

    constructor(private camundaService : ICamundaService){
        this.camundaUri = 'localhost:8080/camunda/api/engine/engine/default';
        this.getTasks();
    }

    getTasks() {
        this.camundaService.getAllTasks().then((tasks : ITask[]) => {
            this.tasks = tasks;
        })
    }

    prettyDate(s:string):string{
        return moment(s).fromNow();
    }
}

export default TasklistController;
