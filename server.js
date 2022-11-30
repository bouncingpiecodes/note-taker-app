// Set variables
const express = require("express");
const path = require("path");
const app = express();

// Set PORT variable
const PORT = process.env.PORT || 3001;

// Import Modules and files
import express from "express";

// Set express static route
app.use("/static", express.static("public"));

// Set express functions

// GET route for homepage
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// GET route for notes
app.get("/notes", (req, res) => {
  res.send("GET request to the homepage");
});

// Post APi route for notes

// DELETE API route for notes

// Set listening on PORT
