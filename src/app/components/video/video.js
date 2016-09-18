import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoComponent from './video.component';

let videoModule = angular.module('videoc', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
     .state('videoC', {
          url: '/videoc',
          template: '<videoc></videoc>',
      })

})

.component('videoc', videoComponent);

export default videoModule;
