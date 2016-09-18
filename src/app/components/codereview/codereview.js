import angular from 'angular';
import uiRouter from 'angular-ui-router';
import codereviewComponent from './codereview.component';

let codereviewModule = angular.module('codereview', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider

     .state('codereview', {
          url: '/codereview',
          // abstract: true
          template: '<codereview></codereview>',
      })

})

.component('codereview', codereviewComponent);

export default codereviewModule;
