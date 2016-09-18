import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoComponent from './video.component';

let videoModule = angular.module('video', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
     .state('video', {
          url: '/video',
          template: '<video></video>',
      })

})

.component('video', videoComponent);

export default videoModule;
