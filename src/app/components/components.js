import angular from 'angular';
import Home from './home/home';
import Profile from './profile/profile';
import Signup from './signup/signup';
import Company from './company-profile/company-profile'
import Review from './review/review';

import Jobs from './jobs/jobs';

import About from './about/about';
import Codereview from './codereview/codereview';
import Video from './video/video';



export default angular.module('app.components', [
  Home.name,
  Profile.name,
  Video.name,
  Codereview.name,
  Signup.name,
  Company.name,
  Review.name,
  Jobs.name,
  About.name
]);
