const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('HELP AHHAHAHAHHA')
})

app.get('/about', (req, res) => {
    res.send('ABOUT AHHAHAHAHHA')
})

app.get('/weather', (req, res) => {
    res.send('WEATHER AAHHAHAHAHAHA')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})