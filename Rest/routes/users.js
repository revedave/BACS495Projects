var express = require('express');
var router = express.Router();

var users = [
  {"id": 1, "name" : "David"},
  {"id": 2, "name": "Matt"}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let user in users){
    if (user.id == id){
      res.json(user);
    }
  }
  res.send("Cannot Find User");
});
module.exports = router;
