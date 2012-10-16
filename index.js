var flatiron = require('flatiron'),
  app = flatiron.app,
  conf = require(__dirname + '/package.json');

app.use(flatiron.plugins.cli, {
  // CLI Options
  dir: __dirname + '/cmd',
  usage: [
    'ng - AngularJS CLI',
    '',
    'Commands:',
    'version - returns the version',
    'init [name] - creates a basic angular app structure',
    'controller [name] - generates new controller',
    'directive [name] - generates new directive',
    'service [name] - generates new service'

  ]
});
app.start();
