import React from "react";
import _ from "lodash";
import { Link, browserHistory } from "react-router";

import Header from "components/Header.js";
import Loading from "components/Loading.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  componentDidMount() {
    fetch("/api/articles")
      .then(res => res.json())
      .then(models => {
        this.setState({
          models
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  detailHandler(model) {
    let id = model._id;
    browserHistory.push("/article/" + id);
  }

  render() {
    let models = this.state.models ? this.state.models : [];
    let _this = this;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {models.length === 0
                ? <div className="post-preview">
                    <Loading />
                  </div>
                : _.map(models, function(item) {
                    let key = item._id;
                    return (
                      <div key={key}>
                        <div className="post-preview">
                          <a onClick={_this.detailHandler.bind(this, item)}>
                            <h2 className="post-title">
                              {item.title}
                            </h2>
                            <h3 className="post-subtitle">
                              {item.abstract}
                            </h3>
                          </a>
                          <p className="post-meta">
                            Posted by <a href="#">{item.author}</a> on{" "}
                            {item.date
                              ? item.date.substring(0, 10)
                              : Date.now()}
                          </p>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
              <ul className="pager">
                <li className="next">
                  <Link to="/work">Older Posts &rarr;</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
