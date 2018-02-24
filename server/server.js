const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h3>Welcome the Nomania Webserver</h3>');
    console.log(`Recieved connection`);
});

app.get('/adminpanel', (req, res) => {
    res.send(adminpanel.html);
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = app;