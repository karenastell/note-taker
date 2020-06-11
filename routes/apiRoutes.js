const Notebook = require("../db/Notebook");
const router = require("express").Router();

// get request for /api/notes
router.get("/notes", (req, res) => {
  Notebook.getNotes();
});
// call the getNotes() from the class you required (Notebook)
// res.json(note)

// post request for /api/notes
router.post("/notes", (req, res) => {
  Notebook.addNotes();
  res.json(newNote);
});
// call the addNotes() from the class you required (Notebook)
// res.json(note)

router.delete("/notes:id", (req, res) => {
  Notebook.deleteNotes();
});
// delete request for /api/notes/:id
// call the deleteNotes()

module.exports = router;
