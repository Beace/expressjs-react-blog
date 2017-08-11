import React, { Component } from 'react';
import BookForm from 'beComponents/BookForm';
import BookHeader from 'components/BookHeader';

class BookPage extends Component {
  render() {
    return (
      <div>
        <BookHeader />
        <BookForm />
      </div>
    );
  }
}
export default BookPage;
