const express = require("express");
const app = express();
const apiRoutes = require("./Develop/routes/apiRoutes")
const htmlRoutes = require("./Develop/routes/htmlRoutes")

const PORT = 8080;

// middleware that is needed to use POST data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// all the routes made in apiRoutes and html routes will be able to be used in this file
app.use("/api", apiRoutes)
app.use("/", htmlRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
    
});

