import { useState } from "react";
import Axios from 'axios';

import SearchTab from "./components/SearchTab";
import ResultsTab from "./components/ResultsTab";
import Navigation from "./components/Navigation";
import useLocalStorage from "./hooks/useLocalStorage";
import './App.css';

const App = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ history, setHistory ] = useLocalStorage('history', null);

  const onChange = e => {
    setSearchTerm(e.target.value)
  };

  const handleClick = e => {
    e.preventDefault()
    setHistory([])
    if(searchTerm) {
      Axios.get(`http://localhost:5000/${searchTerm}`)
      .then(({ data }) => {
        setSearchResults(data)
        setHistory(history.push(searchTerm))
      })
      .catch(err => console.log(err))
    } 
  }
  
  return (
    <div className="App">
      <Navigation />
      <main>
        <SearchTab searchTerm={searchTerm} onChange={onChange} onClick={handleClick}/>
        <ResultsTab history={history} searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default App;
