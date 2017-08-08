const HOST = 'http://localhost';
const PORT = '4000';

const URL = `${HOST}:${PORT}`;
/* eslint-disable no-console */

class API {
  get(url, params) {
    const param = Object.assign({}, params);
    console.log(param);
    return fetch(`${URL}/${url}`).then(res => res.json());
  }
}

const Fetch = new API();

export default Fetch;
