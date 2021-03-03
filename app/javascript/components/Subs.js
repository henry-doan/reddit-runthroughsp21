import React from "react";

const url = "http://localhost:3000/subs/";

const Subs = ({ subs }) => {
  return (
    <>
      <h1>Subs Component Here</h1>
      <a href={ url + "new" }>add sub</a>
      { subs.map((sub) => (
        <div>
          <h3>{sub.name}</h3>
          <a href={ url + sub.id }>show</a>
          <a href={ url + sub.id + '/edit' }>edit</a>
          <a
            href={ url + sub.id }
            data-method="delete"
          >
            delete
          </a>
        </div>
      ))}
    </>
  )
}

export default Subs;