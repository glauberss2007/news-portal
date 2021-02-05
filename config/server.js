
var express = require('express');
var app = express();

// using ejs lib to dynamic html use thrught ejs file
app.set('view engine', 'ejs');
app.set('views','./app/views');

module.exports = app;