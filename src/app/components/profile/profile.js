import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';

let profileModule = angular.module('profile', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
     .state('profile', {
          // abstract: true,
          templateUrl: 'profile.html'
      })
      // .state('profile.codereview', {
      //     // loaded into ui-view of parent's template
      //     templateUrl: 'profile.codereview.html'
      // })
    // .state('profile', {
    //   url: '/profile',
    //   template: '<profile></profile>'
    // })
    // .state('codereview', {
    //   url: '/codereview',
    //   parent: 'profile',
    //   template: '<codereview></codereview>'
    // });
})

.component('profile', profileComponent);

export default profileModule;
