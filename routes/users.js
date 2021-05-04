const express = require('express'),
  router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM users`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
});

// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(name, gender) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.gender
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 201,
      message: "New user added successfully"
    })
  })
});

//delete user exist
router.delete('/del/:id', (req, res) => {
    let sql = 'DELETE FROM USERs WHERE ID ?';
    let values = req.par.id;
    db.query(sql, values, function(err, data, fields) {
        if (err) throw err;
        res.json({
          status: 204,
          message: "user delete successfully"
        })
      })
  });

module.exports = router;