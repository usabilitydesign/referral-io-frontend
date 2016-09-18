
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import '../style/app.css';

import AppFactory from './app.config';
import "!style!css!sass!../style/main.scss";
import "!style!css!sass!../style/ui.scss";
import "!style!css!../style/style.css";


angular
  .module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .directive('app', AppComponent)
  .factory('AppFactory', AppFactory);
