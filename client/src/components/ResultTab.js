import React from 'react';
//import { Box, Heading } from '@chakra-ui/core';

const ResultTab = (props) => {
    const { name, population, capital, demonym, languages, region, currencies } = props;

    const languageNames = new Intl.DisplayNames(['en'], {type: 'language'});
    const currencyNames = new Intl.DisplayNames(['en'], {type: 'currency'});

    return(
        <div>
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Demonym: {demonym}</p>
            <p>Languages:{' '}
                {
                    languages.map((language, indx) =>
                        <span key={indx}>{languageNames.of(language)}</span>
                    )
                }
            </p>
            <p>Currencies:{' '} 
                {
                    currencies.map((currency, indx) =>
                        <span key={indx}>{currencyNames.of(currency)}</span>
                    )
                }
            </p>
        </div>
    )
};

export default ResultTab