import React from "react";
import { useLocation } from "wouter";
import { useReduce } from "../Hooks/useReduce";

export function Search() {
  const [path, setPath] = useLocation();

  const { state, dispatch, ACTIONS } = useReduce();
  const { gifValue, time, time2, category, language } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    gifValue == ""
      ? setPath("/InvalidSearch")
      : setPath(`/gif/${gifValue}/${category}/${language}`);
  };
  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };
  const handleSelect = (evt) => {
    dispatch({
      type: ACTIONS.UPDATE_SELECT,
      payload: evt.target.value,
      reference: evt.target.name,
    });
  };

  const ratings = ["g", "pg", "pg-13", "r"];
  const languages = ["en", "es"];

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
        name="category"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled>category</option>
        {ratings.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>

      <select onChange={handleSelect} name="language">
        {languages.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
      <p>{time}</p>
      <p>{time2}</p>
    </form>
  );
}

export default React.memo(Search);
