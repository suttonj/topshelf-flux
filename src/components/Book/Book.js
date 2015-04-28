
import './Book.less';
import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class Book {

  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    var { className, book, other } = this.props;

    return (
      <div className="book">
        <img src={'img/' + this.props.book.image}/>
        <div className="book-detail">
          <h1 className="title">{this.props.book.title}</h1>
          <p className="description">{this.props.book.description}</p>
        </div>
      </div>
    );
  }
}

export default Book;
