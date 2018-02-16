var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var exec = require('child_process').exec;

router.post('/deploy-trunk', function (req, res) {
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("tilda", function(error, stdout, stderr) {
  if (!error) {
    // things worked!
    res.send('Peticion recibida. Cruza los dedos');
  } else {
    // things failed :(
    res.send('Algo fue mal');
  }
});

});

router.post('/deploy-branch', function (req, res) {
  res.send('No implementado. Bye');
});

router.post('/get-db', function (req, res) {
  res.send('No implementado. Bye');
});

module.exports = router;
