import { useState } from "react";
import SearchTab from "./SearchTab";
import ResultsTab from "./ResultsTab";
import Navigation from "./Navigation";

const Home = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const onChange = e => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className="App">
      <Navigation />
      <main>
        <SearchTab searchTerm={searchTerm} onChange={onChange}/>
        <ResultsTab searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default Home;
