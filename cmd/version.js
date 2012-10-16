var path = require('path'),
  conf = require(path.join(__dirname, '..', 'package.json'));

module.exports = function(cb) {
  console.log('ng - version: ' + conf.version);
  cb(null);
}