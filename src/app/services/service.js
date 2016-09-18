import { baseUrl } from '../constants';

class ApiService {

  constructor($http) {
    this.$http = $http;
  }

  getUser(id)  {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/users/${id}`
    }).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      return data.data.toJSON();
    }).
    error(function(data, status) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    })
    .then(result => {
      console.log('getUser', result);
      return result.data;
    });
  }

  // getUser(id) {
  //   return fetch(`${baseUrl}/api/users/${id}`, {
  //     method: 'GET'
  //   })
  //     .then(body => body.json())
  //     .then(result => {
  //       console.log('getUser', result);
  //       return result;
  //     })
  //     .catch(err => {
  //       console.log('err on user', err);
  //     });
  // }
  getUsers()  {
    return this.$http({
      method: 'GET',
      url: `${baseUrl}/api/users`
    }).success(function(data) {
      console.log(data)
      // this callback will be called asynchronously
      // when the response is available
      return data;
    }).
    error(function(data, status) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    })
    .then(result => {
      console.log('getUsers', result);
      return result.data;
    })
    ;
  }
  // getUsers() {
  //   return fetch(, {
  //     method: 'GET'
  //   })
  //     .then(body => body.json())
  //     .then(result => {
  //       console.log('getUsers', result);
  //       return result;
  //     })
  //     .catch(err => {
  //       console.log('err on users', err);
  //     });
  // }

  // getRoles() {
  //   return fetch(`${baseUrl}/api/roles`, {
  //     method: 'GET'
  //   })
  //     .then(body => body.json())
  //     .then(result => {
  //       console.log('getRoles', result);
  //       return result;
  //     })
  //     .catch(err => {
  //       console.log('error with getRoles', err);
  //     });
  // }

  // getSkills() {
  //   return fetch(`${baseUrl}/api/skills`, {
  //     method: 'GET'
  //   })
  //     .then(body => body.json())
  //     .then(result => {
  //       console.log('getSkills', result);
  //       return result;
  //     })
  //     .catch(err => {
  //       console.log('error with getSkills', err);
  //     });
  // }
}

export default ApiService;
