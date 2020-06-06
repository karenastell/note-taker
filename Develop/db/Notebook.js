// require uuidv4 package to generate an {id : uuidv4()}  in the object with title and text info
const uuidv4 = require("uuidv4");

class Notebook {
  getNotes() {
    // want to READ from the db.json file
    // the contents of the json file will be displayed on the page
    // to read the file - readFile() which is a parat of the 'fs' package
  }

  addNotes() {
     // want to write to the db.json file using writeFile() from the 'fs' package 
  }



  deleteNotes() {
      // check against all of the notes to see which one has the id you are looking to delete
      // call getNotes() and then filter the restults to find the id you're looking for and return the ones that don't match
  }
}
