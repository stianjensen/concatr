#! /usr/bin/env node

var userArgs = process.argv.slice(2);

if (userArgs.length === 0) {
  console.log("No arguments supplied.");
} else {
  cmd = require("./cmd.js");
  switch (userArgs[0]) {
    case "serve":
      cmd.serve(userArgs.slice(1));
      break;
    case "build":
      cmd.build(userArgs.slice(1));
      break;
    case "help":
      console.log("HELP");
      break;
    default:
      console.log("Unknown command");
  }
}

