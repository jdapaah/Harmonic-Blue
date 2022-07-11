// Load express
const express = require("express");
const path = require("path")
const port = process.env.PORT || 8000;

// Create HTTP server
const app = express()
app.get("/", (req, res)=>{
   res.sendFile(path.join(__dirname, "public/templates/index.html"));
});
// Prints a log once the server starts listening
app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
