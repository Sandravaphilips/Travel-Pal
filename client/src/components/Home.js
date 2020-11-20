import { useState, useEffect } from "react";
import Axios from 'axios';
import SearchTab from "./SearchTab";
import ResultsTab from "./ResultsTab";
import Navigation from "./Navigation";

const Home = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ history, setHistory ] = useState([]);
  
  const id = localStorage.getItem('id')

  const onChange = e => {
    setSearchTerm(e.target.value)
  };

  const handleClick = e => {
    e.preventDefault()
    if(searchTerm) {
      if(id) {
        Axios.get(`http://localhost:5000/${id}/${searchTerm}`)
        .then(({ data }) => {
          console.log(data)
          setHistory(data.user.history)
        })
        .catch(err => console.log(err))
      } else {
        Axios.get(`http://localhost:5000/${searchTerm}`)
        .then(({ data }) => {
          setSearchResults(data)
        })
        .catch(err => console.log(err))
        }
      }   
  }

  useEffect(() => {
    if(id) {
        Axios.get(`http://localhost:5000/api/${id}`)
        .then(({ data }) => {
          setSearchResults(data)
        })
        .catch(err => console.log(err))
      }      
}, [id])
  
  return (
    <div className="App">
      <Navigation />
      <main>
        <SearchTab searchTerm={searchTerm} onChange={onChange} onClick={handleClick}/>
        <ResultsTab searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default Home;
