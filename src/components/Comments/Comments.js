import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = ({ comments }) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  // const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(
      	comment => {
      		return(
      				<div key={comment.id}>
      					<div className="comment">      					
	      					
	      					<p className="comment-text"> <span className="user">{comment.username}</span> {comment.text}</p>
      					</div>
      				</div>
      			)
      	})}
    </div>
  );
};

export default Comments;
