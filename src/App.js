import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import fantasy from './data/fantasy.json';

class App extends React.Component {
  
  state = {
    selectedBook: null, 
    comments: [],       
    loading: false,     
    error: null,        
  };

  
  handleSelectBook = (asin) => {
    const selectedBook = fantasy.find((book) => book.asin === asin);
    this.setState({ selectedBook }, () => {
      this.fetchComments(selectedBook.asin); 
    });
  };

  
  fetchComments = (asin) => {
    this.setState({ loading: true, error: null }); 

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUyYThhZDEyOTAwMTU4NzZiYzkiLCJpYXQiOjE3MzI4MDI2NjksImV4cCI6MTczNDAxMjI2OX0._w--f34RPlpfF7cvTnR5aAQBRzlDTrYX2OlbJtROoHs', 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei commenti'); 
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ comments: data, loading: false }); 
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false }); 
      });
  };

  
  handleAddComment = (asin, newComment) => {
    this.setState({ loading: true }); 

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUyYThhZDEyOTAwMTU4NzZiYzkiLCJpYXQiOjE3MzI4MDI2NjksImV4cCI6MTczNDAxMjI2OX0._w--f34RPlpfF7cvTnR5aAQBRzlDTrYX2OlbJtROoHs', 
      },
      body: JSON.stringify({
        comment: newComment.comment,
        rate: newComment.rate,
        elementId: asin,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nell\'aggiunta del commento'); 
        }
        return response.json();
      })
      .then((data) => {
        this.setState((prevState) => ({
          comments: [...prevState.comments, data],
          loading: false,
        }));
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  };

  
  handleDeleteComment = (commentId) => {
    this.setState({ loading: true }); 

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUyYThhZDEyOTAwMTU4NzZiYzkiLCJpYXQiOjE3MzI4MDI2NjksImV4cCI6MTczNDAxMjI2OX0._w--f34RPlpfF7cvTnR5aAQBRzlDTrYX2OlbJtROoHs', 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore durante l\'eliminazione del commento'); 
        }
        return response.json();
      })
      .then(() => {
        this.setState((prevState) => ({
          comments: prevState.comments.filter((comment) => comment.id !== commentId),
          loading: false,
        }));
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  };

  render() {
    const { selectedBook, comments, loading, error } = this.state;

    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <BookList books={fantasy} onSelectBook={this.handleSelectBook} />
          {selectedBook && (
            <CommentArea
              elementId={selectedBook.asin}
              comments={comments}
              onAddComment={this.handleAddComment}
              onDeleteComment={this.handleDeleteComment}
              loading={loading}
              error={error}
            />
          )}
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
