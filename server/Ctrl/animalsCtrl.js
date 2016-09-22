var app = require('../server');
var db = app.get('db');

module.exports = {
  getAllAnimals: function(req, res){
    db.get_all_animals(function(err, animals){
      if (!err){
        res.status(200).json(animals);
      }
      else {
        res.status(402).json(err)
      }
    })
  },
  post_animal: function(req, res){
    db.post_animal([req.body.name, req.body.limbs, req.body.tail, req.body.habitat],
      function(err, animals){
        if (!err){
          res.status(200).json("DONE");
        }
        else {
          res.status(402).json("sorry")
        }
      });
  }
}
