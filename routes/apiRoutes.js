// const Notebook = require("../db/Notes");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const notesJSON = path.join(__dirname, "../db/db.json");

// get request for /api/notes
router.get("/notes", (req, res) => {
  // read the json file
 fs.readFile(notesJSON), "utf8", (err, note) =>{
   if (err) throw err;
 }
 // parse the json file
 res.json(JSON.parse(note));
});


// post request for /api/notes
router.post("/notes", (req, res) => {
  const fsReadFile = fs.readFile(notesJSON, "utf8");
  console.log((fsReadFile, "fsReadFile in router.post"));
  
  res.json(newNote);
});
// call the addNotes() from the class you required (Notebook)
// res.json(note)

router.delete("/notes:id", (req, res) => {
  Notes.deleteNotes(id);
});
// delete request for /api/notes/:id
// call the deleteNotes()

module.exports = router;
