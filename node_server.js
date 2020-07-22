let express = require("express");
let body_parser = require("body-parser");
const port = 80;
const app = express();

app.use("/src", express.static("src"));
app.use("/images", express.static("images"));
app.use(body_parser.json());

//Get webpage
app.get('/*', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Listener
app.listen(port, () => {
  console.log("Server is running on "+ port +" port");
});
