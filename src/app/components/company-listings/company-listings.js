// import '../../style/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyListingComponent from './company-listings.component';
// import Service from '../../services/service';

let listingModule = angular.module('listing', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('listing', {
      url: '/listing',
      template: '<listing></listing>'
    });
})

.component('listing', companyListingComponent)
.service('Service', Service);
// .service('Service', Service);

export default listingModule;
