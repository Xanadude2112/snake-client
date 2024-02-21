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
  if(key === 'i' || key === 'I') connection.write(`Say: I am a sneaky snek`)
  if(key === 'j' || key === 'J') connection.write(`Say: FEED ME`)
  if(key === 'k' || key === 'K') connection.write(`Say: Man, I'm long`)
  if(key === 'l' || key === 'L') connection.write(`Say: I'm going to crash`)
}

const setupInput = function (connection) {
  const stdin = process.stdin;
  // Enable raw mode on stdin, allowing the program to read input byte-by-byte without line buffering
  stdin.setRawMode(true);
  // interpret incoming data as text
  stdin.setEncoding("utf8");
  // Listen for data events on the standard input stream (stdin) and call the handleUserInput function when data is received
// Parameters:
// - key: The data received from the standard input stream (keyboard input)
// - connection: The connection object used for communication with the server
  stdin.on("data", key => handleUserInput(key, connection))
  // Resume reading from stdin, allowing the program to receive input from the standard input stream
  stdin.resume();
  return stdin;
};

module.exports = {setupInput}