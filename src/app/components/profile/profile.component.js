import template from './profile.html';
import controller from './profile.controller';

let profileComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default profileComponent;
