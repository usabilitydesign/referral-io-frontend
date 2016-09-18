import AppFactory from './app.config'

class AppCtrl {
  constructor($scope, $rootScope, $document, AppFactory) {
    this.name = 'app';
    this.bob = 'bob';
    var date = new Date();
    var year = date.getFullYear();
    var pageTransitionOpts = [
        {
            name: 'Fade up',
            "class": 'animate-fade-up'
        }, {
            name: 'Scale up',
            "class": 'ainmate-scale-up'
        }, {
            name: 'Slide in from right',
            "class": 'ainmate-slide-in-right'
        }, {
            name: 'Flip Y',
            "class": 'animate-flip-y'
        }
    ];
    this.main = {
              brand: 'Flatify',
              name: 'Lisa',
              year: year,
              layout: 'wide',                                 // 'boxed', 'wide'
              isMenuCollapsed: true,                         // true, false
              fixedHeader: true,                              // true, false
              fixedSidebar: true,                             // true, false
              pageTransition: pageTransitionOpts[0],          // 0, 1, 2, 3... and build your own
              skin: '31'                                      // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
          };
    this.color = {
              primary:    '#1C7EBB',
              success:    '#23AE89',
              info:       '#2EC1CC',
              infoAlt:    '#6A55C2',
              warning:    '#FFB61C',
              danger:     '#E94B3B',
              gray:       '#DCDCDC'
          };
    this.pageTransitionOpts = AppFactory.pageTransitionOpts;
    console.log('controller')

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
