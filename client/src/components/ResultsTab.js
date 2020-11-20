//import { useEffect } from "react";
//import Axios from "axios";
import ResultTab from "./ResultTab";

const ResultsTab = ({ searchTerm, setSearchResults, searchResults }) => {
    // useEffect(() => {
    //     if(searchTerm) {
    //         Axios.get(`http://localhost:5000/${searchTerm}`)
    //         .then(({ data }) => {
    //           setSearchResults(data)
    //         })
    //         .catch(err => console.log(err))
    //       }      
    // }, [searchTerm, setSearchResults])

    return(
        <div>
            <h2>Results for "{searchTerm}"</h2>
            {
                searchResults ?
                searchResults.map((result, indx) => 
                    <ResultTab {...result} key={indx} />
                ) :
                'Start searching'
            }
        </div>
    )
};

export default ResultsTab