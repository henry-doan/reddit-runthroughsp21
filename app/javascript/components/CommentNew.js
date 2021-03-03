import React from "react";

const CommentNew = ({ topic, comment }) => {
    const { author, body, errors } = comment;
    const defaultAuthor = author ? author : "";
    const defaultBody = body ? body : "";
    return (
      <>
        <h1>Comment New</h1>
        {errors && errors}
        <form action={`/topics/${topic.id}/comments`} method="post">
          <p>Author</p>
          <input defaultValue={defaultAuthor} name="comment[author]" type="text" />
          <p>Body</p>
          <textarea defaultValue={defaultBody} name="comment[body]" />
          <br />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default CommentNew;