var express = require('express');
var router = express.Router();
var morgan = require('morgan');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var exec = require('child_process').exec;

router.post('/deploy-trunk', function (req, res) {
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("gnome-terminal -e '/home/rodrigo/Documents/inspira/source_deploy/trunk/code/./dev_deploy.sh'", function(error, stdout, stderr) {
    morgan(' holaaaaaa')
    if (!error) {
      // things worked!
      res.send('Ejecucion terminada. Suerte.<br>' + stdout);
    } else {
      // things failed :(
      res.status(500).send('Algo fue mal. :(<br>' + stderr);
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
