const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541,
  });
  //this happens the moment the client connects to the server
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
  });
  //this is put in place to collect the data coming from the server
  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });
  //if the connection results in a fail, this error will be thrown
  conn.on("error", (err) => {
    console.error("Connection error: ", err.message);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
const client = connect();

module.exports = {client}