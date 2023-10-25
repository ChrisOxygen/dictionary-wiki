import { DarkModeToggle } from "./components/DarkModeToggle";
import { FontToggle } from "./components/FontToggle";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { SearchBox } from "./components/SearchBox";
import { WordSearchProvider } from "./components/WordSearchProvider";

function App() {
  return (
    <WordSearchProvider>
      <div className="dictionary-container ">
        <div className="container ">
          <Header>
            <FontToggle />
            <span className="divider"></span>
            <DarkModeToggle />
          </Header>
          <SearchBox />
          <Main />
        </div>
      </div>
    </WordSearchProvider>
  );
}

export default App;
