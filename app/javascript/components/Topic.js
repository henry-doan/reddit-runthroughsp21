import React from "react";

const Topic = ({ topic, sub }) => {
  const { name, body } = topic
  return (
    <>
      <div className="topic-card">
        <h1>Topic: {name}</h1>
        <h6>Sub: {sub.name}</h6>
        <p>{body}</p>
        <a href={`/subs`}>subs</a>
        <br />
        <a href={`/`}>also subs</a>
        <br />
        <a href={`/subs/${sub.id}`}>sub show</a>
      </div>
    </>
  );
}

export default Topic;