import React from "react";

const Sub = ({ sub }) => {
  const { id, name, created_at } = sub;
  return (
    <>
      <h1>Sub Component Here</h1>
      <h3>{name}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
    </>
  );
}

export default Sub;