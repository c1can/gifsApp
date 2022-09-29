import React from "react";
import { useState } from "react";
import { useLocation } from "wouter";

function Search() {
  const [gifValue, setValue] = useState("");
  const [path, setPath] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPath(`/gif/${gifValue}`);
  };
  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="my-6">
      <label htmlFor="search">Search</label>
      <input
        onChange={handleChange}
        className="mx-2 text-black p-1"
        type="text"
        name="search"
      />
      <button>Submit</button>
    </form>
  );
}

export default React.memo(Search);
