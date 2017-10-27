import React from 'react';
import Fetch from 'fetch';
import Header from 'components/Header';
import Loading from 'components/Loading';
import './index.css';

class NewsPage extends React.Component {
  state = {
    data: [],
    error: null,
  };

  componentDidMount() {
    Fetch.getNews('top')
      .then(data => {
        this.setState({
          data: data.result.data,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        {
          data.length === 0 ? <Loading /> :
          <div className="container fade-in">
            {data.map(item =>
              (<div key={item.uniquekey} className="media news-item">
                <div className="col-3 align-self-center mr-3 d-none d-md-block"><img src={item.thumbnail_pic_s} style={{ padding: 0 }} className="img-fluid rounded" /></div>
                <div className="media-body align-self-center">
                  <a className="mt-0 h5" href={item.url}>
                    {item.title}
                  </a>
                  <p className="mt-1 mr-0 mb-1 ml-0">
                    作者: {item.author_name} 日期: {item.date}
                  </p>
                  <p className="mt-0 mr-0 mb-0 ml-0">
                    类型: {item.category}
                  </p>
                </div>
              </div>)
            )}
          </div>
        }
      </div>
    );
  }
}

export default NewsPage;
