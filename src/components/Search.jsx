import React from "react";
import { useReducer } from "react";
import { useLocation } from "wouter";

function Search() {
  const [path, setPath] = useLocation();

  const reducer = (state, action) => {
    if (action.type == "changeValue") {
      return {
        ...state,
        gifValue: action.playload,
        time: state.time + 1,
        time2: state.time + 2,
      };
    }
    if (action.type == "changeRating") {
      return {
        ...state,
        categoryy: action.playload,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    gifValue: "",
    time: 0,
    time2: 0,
    categoryy: "g",
  });
  const { gifValue, time, categoryy, time2 } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPath(`/gif/${gifValue}/${categoryy}`);
  };
  const handleChange = (evt) => {
    dispatch({ type: "changeValue", playload: evt.target.value });
  };
  const handleSelect = (evt) => {
    dispatch({ type: "changeRating", playload: evt.target.value });
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
      <p>{time}</p>
      <p>{time2}</p>
    </form>
  );
}

export default React.memo(Search);
