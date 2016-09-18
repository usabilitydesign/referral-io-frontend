
import { baseUrl } from '../constants';

export default class ApiService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(id)  {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/users/${id}`
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        console.log('err on user', err);
      });
  }

  getUsers()  {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/users`
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        console.log('error with getUsers', err);
      });
  }

  getRoles() {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/roles`
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        console.log('error with getRoles', err);
      });
  }

  getSkills() {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/skills`
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        console.log('error with getSkills', err);
      });
  }

  postReview(user, reviewee, review) {
    console.log('submitting review', user, reviewee, review);

    return this.$http({
      method: 'POST',
      url: `${baseUrl}/api/users/${user}/review?reviewee_id=${reviewee_id}`,
      body: review
    })
      .then(result => {
        console.log('submit', result);
      })
      .catch(err => {
        console.log('err with submitReview', err);
      });
  } 
}
