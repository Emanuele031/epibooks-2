import React from 'react';
import SingleBook from './SingleBook'; 

const BookList = ({ books, onSelectBook }) => {
  return (
    <div className="book-list">
      <h2>Lista dei Libri</h2>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.asin}>
            <SingleBook book={book} onSelect={onSelectBook} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
