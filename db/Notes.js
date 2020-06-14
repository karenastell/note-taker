
// const fs = require("fs");

// class Notes {
//   constructor(id, title, text){
//     this.id = 0;
//     this.title = title;
//     this.text = text
//   }
//   getNotes() {
//     // want to READ from the db.json file
//     fs.readFile("./db.json", "utf8");
//     // the contents of the json file will be displayed on the page
//     // to read the file - readFile() which is a parat of the 'fs' package
//   }

//   addNotes() {
//     const newNote = new Notebook({uuid}, title, text)
//     // want to write to the db.json file using writeFile() from the 'fs' package
//     fs.writeFile("./db.json", (err, newNote) => {
//       if (err) throw err;
//       console.log("newNote written: ", newNote);
//     });
//   }

//   deleteNotes(id) {
//     // check against all of the notes to see which one has the id you are looking to delete
//     // call getNotes() and then filter the restults to find the id you're looking for and return the ones that don't match
//     addNotes();
//   }
// }

// module.exports = Notebook;