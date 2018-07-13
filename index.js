const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/codesign.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/codesign.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/prototyping.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/prototyping.html'));
});

app.get('/resume.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/resume.html'));
});

app.get('/usabilitytests.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/usabilitytests.html'));
});

app.get('/userinterviews.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/userinterviews.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
