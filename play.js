const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const resultConnection = connect();
setupInput(resultConnection);