var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Massive = require("massive");
var connectionString = "postgres://postgres:@localhost/thursday";
var db = Massive.connectSync({connectionString: connectionString});
var app = module.exports = express();
app.set('db', db)
var animalsCtrl = require('./Ctrl/animalsCtrl.js')



app.use(bodyParser.json());
app.use(cors());
app.use(express.static('../public'));

app.get('/api/animals', animalsCtrl.getAllAnimals);
app.post('/api/animal', animalsCtrl.post_animal);






var port = 3003;
app.listen(port, function() {
  console.log("this is mayjor tom to ground control", "The port # is "+port);
});
