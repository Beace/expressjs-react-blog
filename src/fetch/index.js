const HOST = 'http://localhost';
// const NEWS_HOST = 'http://toutiao-ali.juheapi.com/toutiao/index';
const PORT = '4000';

const URL = `${HOST}:${PORT}`;

/* eslint-disable no-console */

class API {
  constructor() {
    this.newsHost = 'http://toutiao-ali.juheapi.com/toutiao/index';
    this.host = 'http://localhost';
    this.port = '4000';
  }
  get(url, params) {
    const param = Object.assign({}, params);
    console.log(param);
    return fetch(`${URL}/${url}`).then(res => res.json());
  }

  getNews(type) {
    const url = this.newsHost;
    return fetch(`${url}?type=${type}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'APPCODE a7962ad7dc794ca69e2c71eb2a3cdda3',
      },
    }).then(res => res.json());
  }
}

const Fetch = new API();

export default Fetch;
