import angular from 'angular';
import Home from './home/home';
import Profile from './profile/profile';
import Signup from './signup/signup';
import Company from './company-profile/company-profile'
import Review from './review/review';
import About from './about/about';

export default angular.module('app.components', [
  Home.name,
  Profile.name,
  Signup.name,
  Company.name,
  Review.name,
  About.name
]);
