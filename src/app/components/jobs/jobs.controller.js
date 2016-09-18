class jobsController {
   constructor(Service) {
    // init
    this.name = 'jobs';
    this.service = Service;
    this.jobs = [];

    // ajax
    var id = '8';
    this.getJobs();
  }

  getJobs() {
    this.service.getJobs()
      .then(result => {
        this.jobs = result;
      });
  }

}

export default jobsController;
