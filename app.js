const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const address = [
    {value: "경기도 고양시", text: "경기도 고양시"},
    {value: "경기도 고양이", text: "경기도 고양이"},
    {value: "경기도 성남시", text: "경기도 성남시"},
    {value: "경기도 하남시", text: "경기도 하남시"}
];

function filter(address, search) {
    return address.filter(data => data.text.includes(search))
}

app.get('/api/address', (req, res) => res.status(200).send({
    message: filter(address, req.query.search)
}));

app.get('*', (req, res) => res.status(200).sendFile(path.join(__dirname, 'views/index.html')));


module.exports = app;