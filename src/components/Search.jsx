import React from "react";
import { useState } from "react";
import { useLocation } from "wouter";

function Search() {
  const [gifValue, setValue] = useState("");
  const [path, setPath] = useLocation();
  const [categoryy, setCategory] = useState("g");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPath(`/gif/${gifValue}/${categoryy}`);
  };
  const handleChange = (evt) => {
    setValue(evt.target.value);
  };
  const handleSelect = (evt) => {
    setCategory(evt.target.value);
  };

  const ratings = ["g", "pg", "pg-13", "r"];

  return (
    <form onSubmit={handleSubmit} className="my-6">
      <input
        onChange={handleChange}
        className="mx-2 text-black p-1"
        type="text"
        name="search"
        placeholder="Search Gifs"
      />
      <button>Submit</button>
      <select
        onChange={handleSelect}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled>category</option>
        {ratings.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(Search);
