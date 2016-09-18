import template from './codereview.html';
import controller from './codereview.controller';

let codereviewComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default codereviewComponent;
