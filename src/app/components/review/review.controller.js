class ReviewController {
  constructor(Service) {
    // init
    this.name = 'review';
    this.service = Service;
    this.users = [];

    // ajax
    this.getUsers();
    this.getRoles();
    this.getSkills();
  }

  getUsers() {
    this.service.getUsers()
      .then(result => {
        this.users = result;
      });
  }

  getRoles() {
    this.service.getRoles()
      .then(result => {
        this.roles = result;
      });
  }

  getSkills() {
    this.service.getSkills()
      .then(result => {
        this.skills = result;
      });
  }
}

export default ReviewController;
