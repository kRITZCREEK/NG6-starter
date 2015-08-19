class HomeController {
    constructor(camundaService){
        this.camundaService = camundaService;
    }

    getTasks() {
        this.camundaService.getAllTasks().then((tasks) => {
            this.tasks = tasks;
        });
    }

}

HomeController.$inject = ['camundaService'];

export default HomeController;
