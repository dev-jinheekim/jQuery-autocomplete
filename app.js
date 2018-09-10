const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => res.status(200).sendFile(path.join(__dirname, 'views/index.html')));


module.exports = app;