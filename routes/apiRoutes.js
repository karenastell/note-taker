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
  // read the json file
  const savedJSON = fs.readFile(notesJSON, "utf8");
  console.log((savedJSON, "savedJSON in router.post"));
  const parseSavedJSON = JSON.parse(savedJSON);
  // new note created
  const newNote = req.body;
  // put an id on the notes to be used when deleting notes
  newNote.id = Math.random();
  // push the new note into the json array
  parseSavedJSON.push(newNote);
  // stringify the notes
  const stringifyNotes = JSON.stringify(parseSavedJSON)
  // write all of the notes onto the saved file
  fs.writeFile(notesJSON, newNote, (err) =>{
    if (err) throw err;
    console.log("notes saved");
    
  });
  res.json(stringifyNotes);
});


router.delete("/notes:id", (req, res) => {
  fs.readFile(notesJSON, "utf8", (err, note)=>{
    if(err) throw err;
  })
});
// delete request for /api/notes/:id
// call the deleteNotes()

module.exports = router;
