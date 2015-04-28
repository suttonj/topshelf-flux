
import './BookList.less';
import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class BookList {

  static propTypes = {
    books: PropTypes.object.isRequired
  };

  render() {
    var books = this.props.books ? this.props.books.results.list : [];
     console.log("BOOKLIST:");
     console.log(books);
     
    return (
      <div className="book-list">
        <div className="mini-list">
          <ul>
            {Object.keys(books).map(function(book){
              return (
                <li key={book}>
                  <h1 className="title">{books[book].title}</h1>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookList;
