import ResultTab from "./ResultTab";

const ResultsTab = ({ searchTerm, searchResults, history }) => {

    const renderedComponent = () => {
        if(searchResults.length === 0 && history.length > 0) {
            return(
                <div>
                    <h2>
                        Countries You've Previously Searched:
                    </h2>
                    {
                        history.map((country, indx) => 
                            <ResultTab {...country} key={indx} />
                        )
                    }
                </div>
            )
        } else if(searchResults.length > 0) {
            return(
                <div>
                    <h2>Results for "{searchTerm}"</h2>
                    {
                        searchResults.map((result, indx) => 
                            <ResultTab {...result} key={indx} />
                        )
                    }
                </div>
            )
        } else return(
            <h3>Type in your next country of travel! </h3>
        )
    }

    return(
        renderedComponent()
    )
};

export default ResultsTab