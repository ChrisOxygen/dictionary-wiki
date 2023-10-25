import { useContext, useEffect } from "react";
import Loader from "./Loader";
import { WordSearchContext } from "./WordSearchProvider";
import Error from "./Error";
import DictionaryBody from "./DictionaryBody";

function Main() {
  const { searchQuery, dispatch, isLoading, isError, WordDefinition } =
    useContext(WordSearchContext);
  useEffect(
    function () {
      async function getWordMeaning() {
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
          );

          if (!res.ok)
            throw new SyntaxError(
              res.status === 404
                ? "This word does not exist"
                : "Somthing went wrong"
            );

          const data = await res.json();

          if (!data) throw new SyntaxError("Somthing went wrong");

          dispatch({ type: "MeaningFound", payLoad: data });
        } catch (error) {
          dispatch({ type: "error", payLoad: error.message });
        } finally {
          dispatch({ type: "loaded" });
        }
      }
      if (searchQuery === "") return;
      getWordMeaning();
    },
    [searchQuery, dispatch]
  );
  return (
    <main className="body-section">
      {isLoading ? <Loader /> : ""}
      {isError.status ? <Error msg={isError.msg} /> : ""}
      {WordDefinition.length > 0 ? <DictionaryBody /> : ""}
    </main>
  );
}

export default Main;
