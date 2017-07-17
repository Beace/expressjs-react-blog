import React, { Component } from "react";
import { Route, IndexRoute, Link, browserHistory } from "react-router";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Contacts from "./components/Contacts.js";
import Post from "./components/Post.js";
import Abouts from "./components/About.js";
import TextArea from "./beComponents/TextArea.js";
import BookForm from "./beComponents/BookForm.js";
import BookHeader from "./components/BookHeader.js";
import Loading from "./components/Loading.js";
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
