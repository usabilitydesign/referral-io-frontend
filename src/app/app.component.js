import template from './app.html';
import controller from './app.controller';

let appComponent = () => {
  return {
    template,
    restrict: 'E',
    controller
  };
};

export default appComponent;
