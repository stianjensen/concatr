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
    fs.readFile(filename, function(err, data) {
      if (err) cb(err);

      var lines = data.toString().split("\n");
      for (var i=0;i<lines.length;i++) {
        var re = /@include\(([A-Za-z0-9\. \/]+)\)/g;
        lines[i] = lines[i].replace(re, function(match, p, offset, string) {
          return "[" + p + "]";
        });
      }
      var newData = lines.join("\n");
      cb(err, newData);
    });
  }
}
