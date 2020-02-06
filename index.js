var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

var path = require ('path');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/images')));
// views is directory for all template files
app.set('views', path.join(__dirname + '/views/pages'));
app.set('view engine', 'pug');

/* GET Home Page */
app.get('/', function(req,res) {
  var gridlines = require('./resources/gridlines.json');
  res.render('map', {
    gridlines: gridlines
  });
});

module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
