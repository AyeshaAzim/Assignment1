var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
/* GET users listing. */

router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: 'Ayesha'
  });
});

/* GET users listing. Available on http://localhost:3000/users/john */
router.get('/john', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: 'John'
  });
});

module.exports = router;