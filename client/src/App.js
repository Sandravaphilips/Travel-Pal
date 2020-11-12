//import { ThemeProvider, CSSReset, Heading } from "@chakra-ui/core";
import React, { useState } from "react";
import './App.css';
import SearchTab from "./components/SearchTab";
import ResultsTab from "./components/ResultsTab";

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const onChange = e => {
    setSearchTerm(e.target.value)
  }
  // useEffect(() => {
  //   if(searchTerm) {
  //     Axios.get(`http://localhost:5000/${searchTerm}`)
  //     .then(({ data }) => {
  //       setSearchResults(data)
  //     })
  //     .catch(err => console.log(err))
  //   }
  // }, [searchTerm])
  return (
    <div className="App">
      <h1>Travel Pal</h1>
      <SearchTab searchTerm={searchTerm} onChange={onChange}/>
      <ResultsTab searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
