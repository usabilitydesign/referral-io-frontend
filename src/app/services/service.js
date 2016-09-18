import { baseUrl } from '../constants';

class ApiService {

  constructor() { 
  }

  getUser(id) {
    return fetch(`${baseUrl}/api/users/${id}`, {
      method: 'GET'
    })
      .then(body => body.json())
      .then(result => {
        console.log('getUser', result);
        return result;
      })
      .catch(err => {
        console.log('err on user', err);
      });
  }

  getUsers() {
    return fetch(`${baseUrl}/api/users`, {
      method: 'GET'
    })
      .then(body => body.json())
      .then(result => {
        console.log('getUsers', result);
        return result;
      })
      .catch(err => {
        console.log('err on users', err);
      });
  }

  getRoles() {
    return fetch(`${baseUrl}/api/roles`, {
      method: 'GET'
    })
      .then(body => body.json())
      .then(result => {
        console.log('getRoles', result);
        return result;
      })
      .catch(err => {
        console.log('error with getRoles', err);
      });
  }

  getSkills() {
    return fetch(`${baseUrl}/api/skills`, {
      method: 'GET'
    })
      .then(body => body.json())
      .then(result => {
        console.log('getSkills', result);
        return result;
      })
      .catch(err => {
        console.log('error with getSkills', err);
      });
  }
}

export default ApiService;
