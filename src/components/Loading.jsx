import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Spinner animation="border" variant="primary" />
      <span className="ml-2">Caricamento...</span>
    </div>
  );
};

export default Loading;
