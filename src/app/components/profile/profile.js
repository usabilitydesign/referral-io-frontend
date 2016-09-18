import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';

let profileModule = angular.module('profile', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
     .state('profile', {
          url: '/profile',
          // abstract: true
          template: '<profile></profile>',
      })

})

.component('profile', profileComponent);

export default profileModule;
