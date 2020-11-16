const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const unirest = require('unirest');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 5000;
const users = [];

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
        if (response.error) throw new Error(response.error);
        res.status(200).json(response.body)
    });

});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const user = users.find(user => user.username === username);
    if(user && user.password === password) {
        res.status(200).json({user: user, message: `Welcome back to Travel Pal, ${user.username}`})
    } else res.status(404).json({message: 'User not found. Please enter the correct credentials.'})    
});

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    const id = Date.now();
    const newUser = {...req.body, id: id};

    if(username && password) {
        users.push({...req.body, id: id})
        res.status(201).json({user: newUser, message: `Welcome to Travel Pal, ${username}`})
    } else res.status(400).json({message: 'Please fill in the required credentials.'})    
});

app.get('/', (req, res) => {
    res.send('Hello! I\'m your travel pal.');
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);