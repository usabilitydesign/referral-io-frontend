class HomeController {
  constructor(Service) {
    this.name = 'home';
    this.service = Service;

    this.users = [];
    this.calcNum();

    this.getUsers();
  }

  calcNum() {
    this.usersNum = this.users.length;
  }

  getUsers() {
    this.service.getUsers()
      .then(result => {
        console.log('controller', result);
        this.users = result;
        this.calcNum();
      });
  }
}

export default HomeController;
