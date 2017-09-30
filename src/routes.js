import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import Post from 'components/Post';
import Abouts from 'components/About';
import TextArea from 'beComponents/TextArea';
import HomePage from 'containers/HomePage';
import BookPage from 'containers/BookPage';
import NewsPage from 'containers/NewsPage';

const NoMatch = () => (
  <div>
    <Header />
    <div className="container text-center">404 NOMATCH</div>
  </div>
);


const Admin = () => (
  <div>
    <Header />
    <TextArea />
  </div>
);

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
