class CompanyListingController {

   constructor(Service) {
    // init
    this.name = 'listing';
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

export default CompanyListingController;
