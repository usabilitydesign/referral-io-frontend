import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jobsComponent from './jobs.component';
import Service from '../../services/service';

let jobsModule = angular.module('jobs', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('jobs', {
      url: '/jobs',
      template: '<jobs></signup>'
    });
})

.component('jobs', jobsComponent)
.service('Service', Service);

export default jobsModule;
