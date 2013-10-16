exports.serve = function(userArgs) {
  parseFile(userArgs[0], function(err, data) {
    if (err) throw err;

    server = require('./server.js');
    server.run(data);
  });
};

exports.build = function(userArgs) {
  parseFile(userArgs[0], function(err, data) {
    if (err) throw err;

    var fs = require('fs');
    fs.writeFile('./concatr.html', data, function(err) {
      if (err) throw err;
    });
  });
}

function parseFile(filename, cb) {
  if (filename === undefined) {
    cb("No filename specified", null);
  } else {
    var fs = require('fs');
    fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
      if (err) cb(err);

      var lines = data.split("\n");
      for (var i=0;i<lines.length;i++) {
        var re = /@include\(([A-Za-z0-9\. \/]+)\)/g;
        lines[i] = lines[i].replace(re, function(match, p, offset, string) {
          return getPathContent(p);
        });
      }
      var newData = lines.join("\n");
      cb(err, newData);
    });
  }
}

function getPathContent(path) {
  var fs = require('fs');
  var stats = fs.statSync(path);
  if (stats.isDirectory()) {
    var files = fs.readdirSync(path);
    content = [];
    for (var i=0;i<files.length;i++) {
      content.push(fs.readFile(files[i], {encoding: 'utf8'}));
    }
    return content.join("").trimRight();
  } else {
    return fs.readFileSync(path, {encoding: 'utf8'}).trimRight();
  }
}
