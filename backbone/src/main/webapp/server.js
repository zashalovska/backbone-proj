var express = require('express');
var app = express();
var dust = require('dustjs-linkedin');

app.use(express.static('static'));


app.listen(3000, () => console.log('[INFO] Server was started on port 3000'));