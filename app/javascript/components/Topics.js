import React from "react";

const Topics = ({ topics, sub }) => {
  const { name, id } = sub;
  return (
    <>
      <h1>Topics Page from {name} sub</h1>
      <a href={`/subs/${id}`}>back to sub show</a>
      <br />
      <a href={`/`}>back to subs</a>
      <br />
      <a href={`/subs/${id}/topics/new`}>topic new</a>
      <br />
      { topics.map((topic) => (
        <div key={topic.id} className="topic-card">
          <h3>{topic.name}</h3>
          <p>{topic.body}</p>
          <a href={`/subs/${id}/topics/${topic.id}`}>topic show</a>
          <a href={`/subs/${id}/topics/${topic.id}/edit`}>topic edit</a>
          <a href={`/subs/${id}/topics/${topic.id}`} data-method="delete">
            topic delete
          </a>
        </div>
      ))}
    </>
  );
}

export default Topics;