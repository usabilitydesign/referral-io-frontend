import template from './company-listings.html';
import controller from './company-listings.controller';

let companyListingComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default companyListingComponent;
