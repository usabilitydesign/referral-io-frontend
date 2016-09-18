import template from './company-profile.html';
import controller from './company-profile.controller';

let companyProfileComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default companyProfileComponent;
