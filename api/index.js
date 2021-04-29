const app = require("express")();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataPath = "../server.json";

app.get("/api/episodes", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

module.exports = app;
