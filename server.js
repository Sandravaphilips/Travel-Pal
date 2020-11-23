const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const unirest = require('unirest');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config()
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/:country', (req, res) => {
    const { country } = req.params;
    const request = unirest("GET", `https://restcountries-v1.p.rapidapi.com/name/${country}`);

    request.headers({
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": process.env.RAPID_API_HOST,
        "useQueryString": true
    });

    request.end(function (response) {
        if (response.error) throw new Error({error: response.error});
        res.status(200).json(response.body)
    });

});

app.get('/', (req, res) => {
    res.send('Hello! I\'m your travel pal.');
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);