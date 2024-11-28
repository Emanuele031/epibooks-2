import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SingleComment = ({ comment, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <footer className="blockquote-footer">Voto: {comment.rate}</footer>
        <Button variant="danger" onClick={() => onDelete(comment.id)}>
          Elimina
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;

