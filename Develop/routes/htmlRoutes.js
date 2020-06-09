// install your packages which may include: path, express (router from express)
const router = require("express").Router();
const express = require("express");
const path = require("path");

const app = express();

// get /notes route 
// sendFile() - directory, filename you want to display
router.get("/notes", (req, res)=>{
   const filePath = path.join(__dirname, "..", "public", "notes.html")
    res.sendfile(filePath)
})

// get "*" route
router.get("*", (req, res)=>{
   const filePath = path.join(__dirname, "..", "public", "index.html")
    res.sendfile(filePath)
})
// sendFile() - directory, filename you want to display

// export the Router
module.exports = router;