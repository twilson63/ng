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
    'init - creates a basic angular app structure',
    'g - generates new [controller, view, resource, etc]'
  ]
});
app.start();
