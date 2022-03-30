const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const food = [
    {
        name: 'Fish & Chips',
        fame: '99%',
        popularity: '85%'
    },
    {
        name: 'Roast Chicken',
        fame: '99%',
        popularity: '84%'
    },
    {
        name: 'English Breakfast',
        fame: '98%',
        popularity: '83%'
    },
    {
        name: 'Mashed Potatoes',
        fame: '98%',
        popularity: '77%'
    },
    {
        name: 'Soup',
        fame: '98%',
        popularity: '74%'
    },
    {
        name: 'Roast Beef',
        fame: '98%',
        popularity: '74%'
    },
    {
        name: 'Bangers & Mash',
        fame: '97%',
        popularity: '73%'
    },
    {
        name: 'Beans on Toast',
        fame: '98%',
        popularity: '73%'
    },
    {
        name: 'Pigs in Blankets',
        fame: '98%',
        popularity: '71%'
    },
    {
        name: 'Rib Eye Steak',
        fame: '96%',
        popularity: '70%'
    }
]
// API Endpoints
app.get('/food', (req, res) => {
    res.send(JSON.stringify(food))
});
app.get('/food/random', (req, res) => {
    res.send(JSON.stringify(food[Math.floor(Math.random() * food.length)]))
});
app.get('/food/name', (req, res) => {
    
    let namesArr = [];

        for(i = 0; i < food.length; i++) {
            if (food[i].name) {
                namesArr.push(food[i].name)
            }
        }
    return res.send(JSON.stringify(namesArr))
});
app.get('/food/:name', (req, res) => {
    for(i = 0; i < food.length; i++) {
        if (food[i].name === req.params.name) {
            return res.send(JSON.stringify(food[i]))
        }
    }
});


module.exports = app;