var wrench = require('wrench'),
  ejs = require('ejs'),
  fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  conf = require(__dirname + '/../package.json');

var templateDir = __dirname + '/../template';
// function compileTemplates() {
//   
// }

module.exports = function(name, cb) {
  if(!name) { 
    console.log('project name is required!');
    return;
  }
  if(fs.existsSync(name)) { 
    console.log('project already exists!');
    return;
  }
  var data = { 
      name: name, 
      title: name,
      version: "0.0.0",
      bootstrap: conf.generator.bootstrap,
      fontawesome: conf.generator.fontawesome,
      jquery: conf.generator.jquery,
      bootstrapjs: conf.generator.bootstrapjs,
      angularjs: conf.generator.angularjs,
      view: null
  };
  // create project directory
  fs.mkdirSync(name);
  wrench.readdirSyncRecursive(templateDir).forEach(
    function(item){
      if(/.ejs$/.test(item)) {
        var ejsTemplate = fs.readFileSync(path.join(templateDir, item)),
          result = ejs.render(ejsTemplate.toString(), data);
        fs.writeFileSync(path.join(name, item.replace('.ejs', '')), result);
      } else {
        mkdirp(path.join(name, item));
      }
    }
  );
  console.log(name);
  cb(null);
}