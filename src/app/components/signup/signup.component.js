import template from './signup.html';
import controller from './signup.controller';

let signupComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default signupComponent;
