const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {UserModel} = require('./models/user');
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h3>Welcome the Nomania Webserver</h3>');
    console.log(`Recieved connection`);
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['name']);
    var User = new UserModel(body);

    User.save((err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.send(User);
            console.log('added user');
        }
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = app;