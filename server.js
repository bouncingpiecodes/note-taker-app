// Set variables
const express = require("express");
const path = require("path");
const app = express();
const { clog } = require("./middleware/clog");

// Set PORT variable
const PORT = process.env.PORT || 3001;
app.use(clog);
// Set express static route
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
// Set express functions

// GET route for homepage

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET route for notes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Post APi route for notes
app.post("/api/notes", (req, res) => {
  console.log(123);
  console.log(req);
});

// DELETE API route for notes

// Set listening on PORT
app.listen(PORT, () => console.log("server running"));
