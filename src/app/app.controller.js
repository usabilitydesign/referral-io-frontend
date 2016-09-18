import AppFactory from './app.config'

class AppCtrl {
  constructor($scope, $rootScope, $document, AppFactory) {
    this.name = 'app';
  }
  app() {

          $scope.pageTransitionOpts = AppFactory.pageTransitionOpts;
          $scope.main = AppFactory.main;
          $scope.color = AppFactory.color;

          $scope.$watch('main', function(newVal, oldVal) {
              // if (newVal.menu !== oldVal.menu || newVal.layout !== oldVal.layout) {
              //     $rootScope.$broadcast('layout:changed');
              // }

              if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                  if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                      $scope.main.fixedHeader = true;
                      $scope.main.fixedSidebar = true;
                  }
                  if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                      $scope.main.fixedHeader = false;
                      $scope.main.fixedSidebar = false;
                  }
              }
              if (newVal.fixedSidebar === true) {
                  $scope.main.fixedHeader = true;
              }
              if (newVal.fixedHeader === false) {
                  $scope.main.fixedSidebar = false;
              }
          }, true);

          $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
              $document.scrollTo(0, 0);
          });
      }
}

export default AppCtrl;


// (function () {
//     'use strict';

//     angular.module('app')
//         .controller('AppCtrl', [ '$scope', '$rootScope', '$route', '$document', 'AppFactory', AppCtrl]); // overall control


//     function AppCtrl($scope, $rootScope, $route, $document, AppFactory) {

//         $scope.pageTransitionOpts = AppFactory.pageTransitionOpts;
//         $scope.main = AppFactory.main;
//         $scope.color = AppFactory.color;

//         $scope.$watch('main', function(newVal, oldVal) {
//             // if (newVal.menu !== oldVal.menu || newVal.layout !== oldVal.layout) {
//             //     $rootScope.$broadcast('layout:changed');
//             // }

//             if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
//                 if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
//                     $scope.main.fixedHeader = true;
//                     $scope.main.fixedSidebar = true;
//                 }
//                 if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
//                     $scope.main.fixedHeader = false;
//                     $scope.main.fixedSidebar = false;
//                 }
//             }
//             if (newVal.fixedSidebar === true) {
//                 $scope.main.fixedHeader = true;
//             }
//             if (newVal.fixedHeader === false) {
//                 $scope.main.fixedSidebar = false;
//             }
//         }, true);

//         $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
//             $document.scrollTo(0, 0);
//         });
//     }

// })();
