import { useState } from "react";
import './App.css';
import SearchTab from "./components/SearchTab";
import ResultsTab from "./components/ResultsTab";
import Navigation from "./components/Navigation";

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
      <Navigation />
      <main>
        <SearchTab searchTerm={searchTerm} onChange={onChange}/>
        <ResultsTab searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default App;
