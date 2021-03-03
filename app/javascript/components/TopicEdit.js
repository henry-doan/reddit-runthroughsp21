import React from "react";

const TopicEdit = ({ topic, sub }) => {
    const { id } = topic;
    const { name, body, errors } = topic;
    return (
      <>
        <h1>Topic Edit</h1>
        {errors && errors}
        <form action={`/subs/${sub.id}/topics/${id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          <p>Name</p>
          <input defaultValue={name} name="topic[name]" type="text" />
          <p>Body</p>
          <textarea defaultValue={body} name="topic[body]" />
          <br />
          <button type="submit">update</button>
        </form>
      </>
    );
}

export default TopicEdit;