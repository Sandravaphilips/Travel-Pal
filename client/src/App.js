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
  const [ history, setHistory ] = useLocalStorage('history', []);

  const onChange = e => {
    setSearchTerm(e.target.value)
  };

  const getItem = data => {
    const funFacts = {
      capital: data[0].capital,
      name: data[0].name,
      region: data[0].region,
      demonym: data[0].demonym,
      population: data[0].population,
      languages: data[0].languages,
      currencies: data[0].currencies
    }
    const replica = history.find(country => country.name === funFacts.name)
    if(!replica) {
      history.push(funFacts)
      setHistory(history)
    }
  };

  const setItem = data => {
    const funFacts = {
      capital: data[0].capital,
      name: data[0].name,
      region: data[0].region,
      demonym: data[0].demonym,
      population: data[0].population,
      languages: data[0].languages,
      currencies: data[0].currencies
    }
    
    history.push(funFacts)
    setHistory(history)
  }

  const handleClick = e => {
    e.preventDefault()
    if(searchTerm) {
      Axios.get(`http://localhost:5000/${searchTerm}`)
      .then(({ data }) => {
        history.length > 0 ?
          getItem(data) :
          setItem(data)

        setSearchResults(data)
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
