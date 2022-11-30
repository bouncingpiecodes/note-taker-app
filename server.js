// Set variables
const express = require("express");
const path = require("path");
const app = express();
const { clog } = require("./middleware/clog");
const fs = require("fs");
// const api = require("./routes/index.js");

// Set PORT variable
const PORT = process.env.PORT || 3001;
app.use(clog);
// Set express static route
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  let db = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json")));
  db.push(req.body);
  fs.writeFile(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify(db),
    {},
    (err) => console.log(err)
  );
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

// DELETE API route for notes
app.delete("/api/notes/:id", (req, res) => {
  res.json(dbNotes);
  const deleteIndex = dbNotes.findIndex((note) => {
    return note.id === req.params.id;
  });
  dbNotes.splice(deleteIndex, 1);
  fs.writeFile("/db/db.json", JSON.stringify(dbNotes), (err) =>
    err ? console.log(err) : console.log("Note deleted from database")
  );
});

// Set listening on PORT
app.listen(PORT, () => console.log("server running"));
