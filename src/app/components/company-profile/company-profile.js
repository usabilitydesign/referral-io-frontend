// import '../../style/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyProfileComponent from './company-profile.component';


let companyModule = angular.module('company', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('company', {
      url: '/company',
      template: '<company></company>'
    });
})

.component('company', companyProfileComponent);

export default companyModule;
