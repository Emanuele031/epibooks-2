import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments, onDelete }) => {
  return (
    <div className="comments-list mt-3">
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CommentsList;
