import { Card, CardContent, Typography } from "@material-ui/core";

const ResultTab = (props) => {
    const { name, population, capital, demonym, languages, region, currencies } = props;

    const languageNames = new Intl.DisplayNames(['en'], {type: 'language'});
    const currencyNames = new Intl.DisplayNames(['en'], {type: 'currency'});

    return(
        <Card className='country'>
            <CardContent>
                <Typography color='primary' variant="h4" component="h2">{name}</Typography>
                <Typography><span className='fields'>Capital:</span> {capital}<br/>
                <span className='fields'>Region:</span> {region}<br/>
                <span className='fields'>Population:</span> {population}<br/>
                <span className='fields'>Demonym:</span> {demonym}<br/>
                <span className='fields'>Language:</span>{' '}
                    {
                        languages.map((language, indx) =>
                            <span key={indx}>{languageNames.of(language)}</span>
                        )
                    }<br/>
                    <span className='fields'>Currency:</span>{' '} 
                    {
                        currencies.map((currency, indx) =>
                            <span key={indx}>{currencyNames.of(currency)}</span>
                        )
                    }
                </Typography>                
            </CardContent>
        </Card>
    )
};

export default ResultTab