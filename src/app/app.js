
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import '../style/app.css';
import signupComponent from './components/signup/signup.component';
import companyProfileComponent from './components/company-profile/company-profile.component'
// import profileComponent from './components/profile/profile.component';



angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent)
.component('signup', signupComponent)
// .component('profile', profileComponent)
.config(($stateProvider, $urlRouterProvider) => {

  // $stateProvider
  //   .state('signup', {
  //     url: '/signup',
  //     template: '<signup></signup>'
  //   })
    // .state('profile', {
    //   url: '/profile',
    //   template: '<profile></profile>'
    // });
})


angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent)
.component('company-profile', companyProfileComponent)
// .component('profile', profileComponent)
.config(($stateProvider, $urlRouterProvider) => {

  // $stateProvider
  //   .state('signup', {
  //     url: '/signup',
  //     template: '<signup></signup>'
  //   })
    // .state('profile', {
    //   url: '/profile',
    //   template: '<profile></profile>'
    // });
})

