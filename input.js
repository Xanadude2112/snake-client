const handleUserInput = (key, connection) => {
  if(key === `\u0003`) process.exit();
  if(key === 'w' || key === 'W') connection.write(`Move: up`);
  if(key === 'd' || key === 'D') connection.write(`Move: right`);
  if(key === 's' || key === 'S') connection.write(`Move: down`);
  if(key === 'a' || key === 'A') connection.write(`Move: left`);
}

const setupInput = function (connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", key => handleUserInput(key, connection))
  stdin.resume();
  return stdin;
};

module.exports = {setupInput}