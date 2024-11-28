import React from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

class CommentArea extends React.Component {
  render() {
    const { elementId, comments, onAddComment, onDeleteComment, loading, error } = this.props;

    return (
      <div className="comment-area mt-4">
        <h3>Commenti</h3>
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && (
          <>
            <CommentsList comments={comments} onDelete={onDeleteComment} />
            <AddComment elementId={elementId} onAddComment={onAddComment} />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;
