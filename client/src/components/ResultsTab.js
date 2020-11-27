import { CircularProgress, makeStyles } from "@material-ui/core";
import ResultTab from "./ResultTab";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin: theme.spacing(20, 80, 10)
    },
}));

const ResultsTab = ({ searchTerm, searchResults, history, loading, error }) => {
    const classes = useStyles();    

    const renderedComponent = () => {
        if(loading) {
            return <div className={classes.root}>
                <CircularProgress />
            </div>
        } else if(error) {
            return(
                <div>
                    <h3>Oops! Country not found. Kindly check that your country is spelled correctly or try another country</h3>
                </div>
            )
        }else if(searchResults.length === 0 && history.length > 0) {
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