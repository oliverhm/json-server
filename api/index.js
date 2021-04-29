const app = require("express")();
const bodyParser = require("body-parser");
const fs = require("fs");
const { join } = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataPath = "../episodes.json";

app.get("/api/episodes", (req, res) => {
  fs.readFile(join(__dirname, dataPath), "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

module.exports = app;
