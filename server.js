const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("path");

const PORT = process.env.PORT || 8080;

// middleware that is needed to use POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// all the routes made in apiRoutes and html routes will be able to be used in this file
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

