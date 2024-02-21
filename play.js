const {connect} = require('./client');

// setup interface to handle user input from stdin
let connection;

const handleUserInput = (key) => {
  if(key === `\u0003`) {
    process.exit();
  }
  if(key === 'w' || key === 'W') connection.write(`Move: up`);
  if(key === 'd' || key === 'D') connection.write(`Move: right`);
  if(key === 's' || key === 'S') connection.write(`Move: down`);
  if(key === 'a' || key === 'A') connection.write(`Move: left`);
}

const setupInput = function () {
  connection = connect();
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput)
  stdin.resume();
  return stdin;
};
setupInput();