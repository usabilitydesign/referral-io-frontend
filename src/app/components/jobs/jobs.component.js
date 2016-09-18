import template from './jobs.html';
import controller from './jobs.controller';

let jobsComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default jobsComponent;
