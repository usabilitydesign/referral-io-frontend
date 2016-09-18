// import '../../style/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyProfileComponent from './company-profile.component';


let companyModule = angular.module('company-profile', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('company-profile', {
      url: '/company-profile',
      template: '<company-profile></company-profile>'
    });
})

.component('company-profile', companyProfileComponent);

export default companyModule;
