import angular from 'angular';
import Home from './home/home';
import Profile from './profile/profile';
import Signup from './signup/signup';


export default angular.module('app.components', [
  Home.name,
  Profile.name,
  Signup.name
]);
