class HomeController {
  constructor(Service) {
    this.name = 'home';
    this.service = Service;

    this.getUsers();
  }

  getUsers() {
    this.service.getUsers()
      .then(result => {
        console.log('controller', result);
        this.result = result;
      });
  }
}

export default HomeController;
