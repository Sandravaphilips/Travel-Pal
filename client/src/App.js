import { useState } from "react";
import './App.css';
import SearchTab from "./components/SearchTab";
import ResultsTab from "./components/ResultsTab";
import { Typography } from "@material-ui/core";

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
      <Typography variant='h1' component='h2' color='primary'>Travel Pal</Typography>
      <SearchTab searchTerm={searchTerm} onChange={onChange}/>
      <ResultsTab searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
