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
  const [ loading, setLoading ] = useState(false);
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
      if(history.length >= 5) {
        history.pop()
      }
      history.unshift(funFacts)
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
    setLoading(true)
    if(searchTerm) {
      Axios.get(`https://travel-pal.herokuapp.com/${searchTerm}`)
      .then(({ data }) => {
        history.length > 0 ?
          getItem(data) :
          setItem(data)

        setSearchResults(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
    } 
  }
  
  return (
    <div className="App">
      <Navigation />
      <main className='content'>
        <SearchTab searchTerm={searchTerm} onChange={onChange} onClick={handleClick}/>
        <ResultsTab loading={loading} history={history} searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default App;
