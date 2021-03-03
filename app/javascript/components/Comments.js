import React from "react";

const Comments = ({ comments, topic }) => {
  const { id, name } = topic;
  return (
    <>
      <h1>Comments Page from {name} sub</h1>
      <a href={`/`}>back to subs</a>
      <a href={`/topics/${id}/comments/new`}>Comment new</a>
      { comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  )
}

export default Comments;