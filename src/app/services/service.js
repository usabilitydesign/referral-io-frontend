
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
}
