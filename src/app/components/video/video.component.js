
import template from './video.html';
import controller from './video.controller';

let videoComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default videoComponent;
