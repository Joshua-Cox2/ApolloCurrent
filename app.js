const {loaddata} = require('./user_model');
const express = require('express');
const app = express();

const port = 3000
app.listen(port, () => console.log(''))

app.get('/', (request, response) => response.send(''))

app.get('/users', (request, response) => {
    response.send(loaddata());
});

