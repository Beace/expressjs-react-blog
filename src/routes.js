import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import Nav from 'components/Nav';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Contacts from 'components/Contacts';
import Post from 'components/Post';
import Abouts from 'components/About';
import TextArea from 'beComponents/TextArea';
import HomePage from 'containers/HomePage';
import BookPage from 'containers/BookPage';
import NewsPage from 'containers/NewsPage';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
  }
}

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">404 NOMATCH</div>
      </div>
    );
  }
}

class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <TextArea />
      </div>
    );
  }
}



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="article">
      <Route path=":id" component={Post} />
    </Route>
    <Route path="news" component={NewsPage}></Route>
    <Route path="about" component={Abouts} />
    <Route path="contact" component={Contacts} />
    <Route path="admin" component={Admin} />
    <Route path="book" component={BookPage} />
    <Route path="*" component={NoMatch} />
  </Route>
);
