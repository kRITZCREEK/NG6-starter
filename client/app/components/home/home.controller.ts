import {
    ITask,
    ICamundaService
} from '../../common/services/camundaService/camundaService';

class HomeController {
    camundaEngineRoute:string;
    tasks: ITask[];

    static $inject = ['camundaService'];

    constructor(private camundaService : ICamundaService){ }

    getTasks() {
        this.camundaService.getAllTasks().then((tasks : ITask[]) => {
            this.tasks = tasks;
        })
    }

}

export default HomeController;
