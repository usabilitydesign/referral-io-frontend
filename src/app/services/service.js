import { baseUrl } from '../constants';

class ApiService {

  constructor() { 
  }

  getUsers() {
    return fetch(`${baseUrl}/api/users`, {
      method: 'GET'
    })
      .then(body => body.json())
      .then(result => {
        console.log('getUsers', result);
        return result;
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
      });
  }
}

export default ApiService;
