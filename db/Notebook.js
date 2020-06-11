// require uuidv4 package to generate an {id : uuidv4()}  in the object with title and text info
const { uuid } = require("uuidv4");
const fs = require("fs");

class Notebook {
  constructor(id, title, text){
    this.id = id;
    this.title = title;
    this.text = text
  }
  getNotes() {
    // want to READ from the db.json file
    fs.readFile("./db.json", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    // the contents of the json file will be displayed on the page
    // to read the file - readFile() which is a parat of the 'fs' package
  }

  addNotes() {
      const newNote = {
      id: { uuid },
      title: req.body.title,
      text: req.body.text,
    };
    // want to write to the db.json file using writeFile() from the 'fs' package
    fs.writeFile("./db.json", (err, newNote) => {
      if (err) throw err;
      console.log(newNote);
    });
  }

  deleteNotes(id) {
    // check against all of the notes to see which one has the id you are looking to delete
    // call getNotes() and then filter the restults to find the id you're looking for and return the ones that don't match
    addNotes();
  }
}

module.exports = Notebook;