// Define a function to handle user input from the keyboard and perform actions based on the input
// Parameters:
// - key: The keyboard input received by the program
// - connection: The connection object used for communication with the server
const handleUserInput = (key, connection) => {
  if(key === `\u0003`) process.exit();
  if(key === 'w' || key === 'W') connection.write(`Move: up`);
  if(key === 'd' || key === 'D') connection.write(`Move: right`);
  if(key === 's' || key === 'S') connection.write(`Move: down`);
  if(key === 'a' || key === 'A') connection.write(`Move: left`);
}

const setupInput = function (connection) {
  const stdin = process.stdin;
  // Enable raw mode on stdin, allowing the program to read input byte-by-byte without line buffering
  stdin.setRawMode(true);
  // interpret incoming data as text
  stdin.setEncoding("utf8");
  stdin.on("data", key => handleUserInput(key, connection))
  // Resume reading from stdin, allowing the program to receive input from the standard input stream
  stdin.resume();
  return stdin;
};

module.exports = {setupInput}