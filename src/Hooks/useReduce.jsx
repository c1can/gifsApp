import { useReducer } from "react";

export const useReduce = () => {
  const ACTIONS = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_SELECT: "update_select",
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
      case ACTIONS.UPDATE_SELECT:
        return {
          ...state,
          [action.reference]: action.payload,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    gifValue: "",
    time: 0,
    time2: 0,
    category: "g",
    language: "en",
  });

  return { state, dispatch, ACTIONS };
};
