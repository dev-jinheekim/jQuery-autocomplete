const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const address = [
    {"text": "경기도 고양시"},
    {"text": "경기도 성남시"},
    {"text": "경기도 하남시"}
];

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

function filter(address, search) {
    return address.filter(data => data.text.includes(search))
}


app.get('/api/address', (req, res) => res.status(200).send({
    message: address
}));

app.get('/api/address/:search', (req, res) => res.status(200).send({
    message: filter(address, req.params.search)
}));

app.get('*', (req, res) => res.status(200).send({
    message: '주소 자동완성 prototyping'
}));

module.exports = app;