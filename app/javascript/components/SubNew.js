import React from "react";

const SubNew = ({ sub }) => {
    // doing this here in case creating failed we can still get back
    // the values that where in the form so it doesn't clear out the form
    const { name } = sub;
    const defaultName = name ? name : "";
    return (
      <>
        <h1>SubNew Component Here</h1>
        <form action="/subs" method="post">
          <input
            placeholder="Name"
            type="text"
            defaultValue={defaultName}
            name="sub[name]"
          />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default SubNew;