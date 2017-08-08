import React, { Component } from 'react';
import Loading from 'components/Loading';
import Fetch from '../fetch';

export default class Post extends Component {
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
    Fetch.get(`api/post/${id}`).then(model => {
      this.setState({
        model,
      });
    }).catch(error => {
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
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-heading">
                  <h1>
                    {model.title}
                  </h1>
                  <h2 className="subheading">
                    {model.abstract}
                  </h2>
                  <span className="meta">
                    Posted by <a>{model.author}</a> on{' '}
                    {model.date ? model.date.substring(0, 10) : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div className="container">
            <div className="row">
              {model.content
                ? <div
                  className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
                  dangerouslySetInnerHTML={{ __html: model.content }}
                />
                : <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <Loading />
                </div>}
            </div>
          </div>
        </article>
      </div>
    );
  }
}
