import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SingleBook = ({ book, onSelect }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button variant="primary" onClick={() => onSelect(book.asin)}>
          Vedi Commenti
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
