import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <header
          className="intro-header"
          style={{ backgroundImage: "url('images/about-bg.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="page-heading">
                  <h1>About Me</h1>
                  <hr className="small" />
                  <span className="subheading">This is what I do.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container text-center">
          <p>个人简介 Beace Lee, 本名李世民，2016年6月毕业于上海工程技术大学，计算机嵌入式方向。</p>
          <p>专注web领域开发。如今从事ReactJs及Node相关技术（栈）开发。</p>
          <p>另外两个博客</p>
          <a
            href="https://beace.github.io"
            target="_blank"
            style={{ marginRight: 10 }}
          >
            Blog by Github
          </a>
          <a href="https://beacelee.com" target="_blank">
            Blog by thinkJS
          </a>
          <p>交流 email: beaceshimin@gmail.com</p>
        </div>
      </div>
    );
  }
}
