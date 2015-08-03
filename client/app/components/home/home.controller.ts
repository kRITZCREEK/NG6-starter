import {
    Task,
    ICamundaService
} from '../../common/services/camundaService/camundaService';

class HomeController {
    name : string;
    tasks: Task[];

    constructor(private camundaService : ICamundaService){
        this.name = 'home';
    }

    getTasks() {
        this.camundaService.getAllTasks().then((tasks : Task[]) => {
            this.tasks = tasks;
        })
    }

}

export default HomeController;
