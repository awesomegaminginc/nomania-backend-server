const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h3>Welcome the Nomania Webserver</h3><br><br><p>You really shouldn\'t be here. If you want to gain access to the admin panel, <a href="https://www.google.com/search?safe=strict&rlz=1C1CHBF_enUS764US764&ei=w66LWouiH42EjwPwyqyADA&q=joke%27s+on+you%2C+sucka&oq=joke%27s+on+you%2C+sucka&gs_l=psy-ab.3...4493.5282.0.7225.7.7.0.0.0.0.191.743.2j4.6.0....0...1c.1.64.psy-ab..1.5.551...0j0i22i30k1j33i22i29i30k1.0.cD7ks-dv1-g">go here<\a></p>');
    console.log(`Recieved connection`);
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = app;