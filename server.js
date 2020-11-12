const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const unirest = require('unirest');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/:country', (req, res) => {
    const { country } = req.params;
    const request = unirest("GET", `https://restcountries-v1.p.rapidapi.com/name/${country}`);

    request.headers({
        "x-rapidapi-key": "9a58e087dbmshc535cd60036493dp107bf4jsn38945c211c39",
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "useQueryString": true
    });

    request.end(function (response) {
        if (response.error) throw new Error(response.error);
        res.status(200).json(response.body)
        //console.log(res.body);
    });

})



app.get('/', (req, res) => {
    res.send('Hello! I\'m your travel pal.');
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);