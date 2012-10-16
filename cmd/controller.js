var ejs = require('ejs'),
  fs = require('fs'),
  path = require('path');

var templateDir = __dirname + '/../template';

module.exports = function(name, cb) {
  // generate controllerjs
  var templates = ['app/scripts/controllers/index.js.ejs','app/views/index.html.ejs'],
    data = { name: name, title: name, view: name };
  templates.forEach(function(item){
    var ejsTemplate = fs.readFileSync(path.join(templateDir, item)),
      result = ejs.render(ejsTemplate.toString(), data),
      ctrl = item.replace('index', name);
    fs.writeFileSync(path.join('.', ctrl.replace('.ejs', '')), result);
  });
  cb(null);
}