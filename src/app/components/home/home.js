import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import Service from '../../services/service';


let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent)
.service('Service', Service);
export default homeModule;
