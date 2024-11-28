import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({ message }) => {
  return (
    <Alert variant="danger" className="mt-4">
      <h4 className="alert-heading">Errore!</h4>
      <p>{message}</p>
    </Alert>
  );
};

export default Error;
