const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "..", "build");

require("dotenv").config({ path: ".env.development"});

app.use(express.static(publicPath));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// LISTEN SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port 3000");
});
