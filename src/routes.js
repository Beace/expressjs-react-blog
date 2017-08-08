import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Post from './components/Post';
import Abouts from './components/About';
import TextArea from './beComponents/TextArea';
import BookForm from './beComponents/BookForm';
import BookHeader from './components/BookHeader';

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

class ArticleList extends Component {
  render() {
    return (
      <div>
        <Abouts />
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <Abouts />
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <Contacts />
        </div>
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

class Book extends Component {
  render() {
    return (
      <div>
        <BookHeader />
        <BookForm />
      </div>
    );
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="article">
      <Route path=":id" component={Post} />
    </Route>
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="admin" component={Admin} />
    <Route path="book" component={Book} />
    <Route path="*" component={NoMatch} />
  </Route>
);
