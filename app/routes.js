var express = require('express');
var app = express.Router();
app.use(express.static('views'));
var content = require(__dirname + '/views/index/content');

// Route index page
app.get('/', function (req, res) {
  res.render('index', {
    content : content
  });
});

module.exports = app;

require('./views/ucca1/routes/routes')(app);
require('./views/ucca2/routes/routes')(app);
require('./views/pyi3/routes/routes')(app);
require('./views/pyi4/routes/routes')(app);
require('./views/pyi5/routes/routes')(app);
require('./views/pyi6/routes/routes')(app);
require('./views/pyi7/routes/routes')(app);
require('./views/pyi8/routes/routes')(app);
require('./views/pyi9/routes/routes')(app);
require('./views/pyi10/routes/routes')(app);
require('./views/pyi11/routes/routes')(app);
require('./views/pyi12a/routes/routes')(app);
require('./views/pyi12b/routes/routes')(app);
require('./views/pyi13/routes/routes')(app);
require('./views/pyi14/routes/routes')(app);
require('./views/pyi15/routes/routes')(app);
