var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/print-example', function(req, res, next) {
  res.render('print-example', { title: 'Express' });
});

var exec = require('child_process').exec;

// I can't use next function
function runScript(scriptName){
  exec(scriptName, function(error, stdout, stderr) {
    morgan('Testing Morgan log')
    if (!error) {
      return true;
    } else {
      return false;
    }
  });
};

router.post('/deploy-trunk', function (req, res) {  
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("gnome-terminal -e '/home/rodrigo/Documents/inspira/source_deploy/trunk/code/./dev_deploy.sh'", function(error, stdout, stderr) {   

    if (!error) {
      res.send('Ejecucion terminada.<br>' + stdout);
    } else {
      res.status(500).send('Algo fue mal. :(<br>' + stderr);
    }
  });  
});

router.post('/deploy-branch', function (req, res) {
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("gnome-terminal -e '/home/rodrigo/Documents/inspira/source_deploy/branches/1.30/code/./dev_deploy.sh'", function(error, stdout, stderr) {   

    if (!error) {
      res.send('Ejecucion terminada.<br>' + stdout);
    } else {
      res.status(500).send('Algo fue mal. :(<br>' + stderr);
    }
  });
});

router.get('/get-db', function (req, res) {
  res.send('No implementado. Bye');
/*  
  exec("gnome-terminal -e '/home/rodrigo/Documents/inspira/deployer/uploads/./get_db_backup.sh'", function(error, stdout, stderr) {
    if (!error) {
      var filePath = __dirname + '/../uploads/db_backup.sql';
      res.download(filePath); // Load file content and send
    } else {
      res.status(500).send('No se pudo obtener el archivo. :(<br>' + stderr);
    }
  });
*/  
});

module.exports = router;
