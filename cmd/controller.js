var ejs = require('ejs'),
  fs = require('fs'),
  path = require('path');

var templateDir = __dirname + '/../template';

module.exports = function(name, cb) {
  // generate controllerjs
  var templates = ['app/scripts/controllers/index.js.ejs','app/views/index.html.ejs'];
  templates.forEach(function(item){
    var ctrl = item.replace('index', name),
      ejsTemplate = fs.readFileSync(path.join(templateDir, ctrl)),
      result = ejs.render(ejsTemplate.toString(), data);
    fs.writeFileSync(path.join(name, item.replace('.ejs', '')), result);
  });
  cb(null);
}