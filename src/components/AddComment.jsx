import React from 'react';
import { Button, Form } from 'react-bootstrap';

class AddComment extends React.Component {
  state = {
    commentText: '',
    rating: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.commentText,
      rate: this.state.rating.toString(),
    };

    this.props.onAddComment(this.props.elementId, newComment);

    this.setState({
      commentText: '',
      rating: 1,
    });
  };

  render() {
    return (
      <div className="mt-4">
        <h4>Aggiungi un commento</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="commentText">
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.commentText}
              onChange={(e) => this.setState({ commentText: e.target.value })}
              placeholder="Aggiungi un commento"
              required
            />
          </Form.Group>

          <Form.Group controlId="rating">
            <Form.Label>Voto</Form.Label>
            <Form.Control
              as="select"
              value={this.state.rating}
              onChange={(e) => this.setState({ rating: Number(e.target.value) })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
