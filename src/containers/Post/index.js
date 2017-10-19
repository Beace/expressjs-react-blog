import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import Fetch from '../../fetch';
import './index.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        author: null,
        content: null,
        title: null,
        date: null,
      },
    };
  }
  componentDidMount() {
    const id = this.props.params.id;
    Fetch.get(`api/article/${id}`)
      .then(model => {
        this.setState({
          model,
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    const model = this.state.model;
    return (
      <div>
        <header className="intro-header post-header-bg">
          <div className="container">
            <div className="row">
              <div className="col align-self-center">
                <div
                  className={
                    model.content ? 'post-heading' : 'post-heading post-loading'
                  }
                >
                  <h1>{model.title}</h1>
                  <h2 className="subheading">{model.abstract}</h2>
                  <span className="meta">
                    {model.content && (
                      <div>
                        Posted by <a>{model.author}</a> on{' '}
                        {model.date ? model.date.substring(0, 10) : ''}
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div className="container">
            <div className="row">
              {model.content ? (
                <div
                  className="col align-self-center"
                  dangerouslySetInnerHTML={{ __html: model.content }}
                />
              ) : (
                <div className="col align-self-center">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object,
};

export default Post;
