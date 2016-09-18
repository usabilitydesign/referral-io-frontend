import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';


import '../style/app.css';
import '../style/company-profile.css';

import signupComponent from './components/signup/signup.component';
import companyProfileComponent from './components/company-profile/company-profile.component'
// import profileComponent from './components/profile/profile.component';


import AppFactory from './app.config';

import "!style!css!sass!../style/main.scss";
import "!style!css!sass!../style/ui.scss";
import "!style!css!../style/style.css";
import "../style/home.css";
import "../style/app.css";
import '../style/company-profile.css';

angular
  .module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .directive('app', AppComponent)
  .factory('AppFactory', AppFactory)
  .config(($stateProvider, $urlRouterProvider) => {});
