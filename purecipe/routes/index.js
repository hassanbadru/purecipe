var express = require('express');
var router = express.Router();
var axios = require('axios');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
// format -> http://localhost:3001/api/?q=b
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  search_query = req.query.q

  const url = `http://www.recipepuppy.com/api/?q=${search_query}`


    let that = this

      axios.get(url)
      .then(res => res.data).then(results => {
          // console.log(results)
          res.send(results)
      })
      .catch(error => console.log('BAD', error));

});

module.exports = router;
