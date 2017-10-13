/* eslint-disable */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Fetch from 'fetch';
import './index.css';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
    };
  }

  componentDidMount() {
    Fetch.get('api/articles')
      .then(models => {
        this.setState({
          models,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const models = this.state.models ? this.state.models : [];
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              {models.length === 0 ? (
                <div className="post-preview">
                  <Loading />
                </div>
              ) : (
                models.map(item => {
                  const key = item._id;
                  return (
                    <div key={key} className="posts-overview">
                      <div className="post-preview">
                        <Link to={`/article/${item._id}`}>
                          <h2 className="post-title">{item.title}</h2>
                          <h3 className="post-subtitle">{item.abstract}</h3>
                        </Link>
                        <p className="post-meta">
                          Posted by <a>{item.author}</a> on
                          {item.date ? item.date.substring(0, 10) : Date.now()}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
