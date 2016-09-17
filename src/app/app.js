// import angular from 'angular';
// import uiRouter from 'angular-ui-router';

// import '../style/app.css';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   }
// };

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }



// angular.module(MODULE_NAME, [
//   uiRouter])
//   .directive('app', app)
//   .controller('AppCtrl', AppCtrl)
//   .config(($stateProvider, $urlRouterProvider) => {
//   $urlRouterProvider.otherwise('/');

//   $stateProvider
//     .state('home', {
//       url: '/',
//       template: '<home></home>'
//     });
// })


// import 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import '../style/app.css';


angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent)


