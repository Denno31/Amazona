import React, { useState } from "react";

const SearchBox = (props) => {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="rows">
        <input type="text" name="q" onChange={(e) => setName(e.target.value)} />
        <button className="primary" type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
