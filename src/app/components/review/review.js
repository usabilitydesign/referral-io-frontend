import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reviewComponent from './review.component';
import Service from '../../services/service';

let homeModule = angular.module('review', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('review', {
        url: '/review',
        template: '<review></review>'
      })
  })
  .component('review', reviewComponent)
  .service('Service', Service);

export default homeModule;
