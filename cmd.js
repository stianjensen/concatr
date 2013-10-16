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
    fs.readFile(filename, cb);
  }
}
