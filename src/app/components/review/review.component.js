import template from './review.html';
import controller from './review.controller';

let reviewComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default reviewComponent;
