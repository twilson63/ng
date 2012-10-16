var ejs = require('ejs'),
  fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp');

var templateDir = __dirname + '/../template';

module.exports = function(name, cb) {
  // generate directivejs
  var templates = ['app/scripts/services/name.js.ejs'],
    data = { name: name, title: name, view: name };
  mkdirp('app/scripts/services');
  templates.forEach(function(item){
    var ejsTemplate = fs.readFileSync(path.join(templateDir, item)),
      result = ejs.render(ejsTemplate.toString(), data),
      ctrl = item.replace('name', name);
    fs.writeFileSync(path.join('.', ctrl.replace('.ejs', '')), result);
  });
  cb(null);
}