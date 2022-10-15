import React from "react";
import { useReducer } from "react";
import { useLocation } from "wouter";

function Search() {
  const [path, setPath] = useLocation();

  const ACTIONS = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_RATING: "update_rating",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_KEYWORD:
        return {
          ...state,
          gifValue: action.payload,
          time: state.time + 1,
          time2: state.time2 + 1,
        };

      case ACTIONS.UPDATE_RATING:
        return {
          ...state,
          category: action.payload,
        };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    gifValue: "",
    time: 0,
    time2: 0,
    category: "g",
  });
  const { gifValue, time, category, time2 } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPath(`/gif/${gifValue}/${category}`);
  };
  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };
  const handleSelect = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value });
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
