import React from 'react';
import Fetch from 'fetch';
import Header from 'components/Header';
import Loading from 'components/Loading';

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
          data.length === 0 && <Loading />
        }
        <ul>
          {data.map(item =>
            (<li key={item.uniquekey}>
              <a href={item.url}>
                {item.title}
              </a>
              <p>
                author: {item.author_name} date: {item.date}
              </p>
              <p>
                type: {item.category}
              </p>
              <img src={item.thumbnail_pic_s} style={{ width: 200 }} />
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

export default NewsPage;
