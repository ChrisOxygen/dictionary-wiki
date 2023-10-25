import { createContext, useReducer } from "react";

const initialState = {
  searchQuery: "",
  isLoading: false,
  isError: { status: false, msg: "" },
  WordDefinition: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "searchInput":
      return { ...state, searchQuery: action.payLoad };
    case "getMeaning":
      return {
        ...state,
        searchQuery: action.payLoad,
        isLoading: true,
        isError: { status: false, msg: "" },
        WordDefinition: [],
      };
    case "error":
      return { ...state, isError: { status: true, msg: action.payLoad } };
    case "MeaningFound":
      return {
        ...state,
        WordDefinition: action.payLoad,
        isLoading: false,
        isError: { status: false, msg: "" },
      };
    case "loaded":
      return { ...state, isLoading: false };

    default:
      return new Error("unknown action");
  }
}

const WordSearchContext = createContext();

function WordSearchProvider({ children }) {
  const [{ searchQuery, isLoading, isError, WordDefinition }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <WordSearchContext.Provider
      value={{ searchQuery, dispatch, isLoading, isError, WordDefinition }}
    >
      {children}
    </WordSearchContext.Provider>
  );
}

export { WordSearchProvider, WordSearchContext };
