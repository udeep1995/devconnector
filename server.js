const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo Db Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("index route"));

app.listen(port, () => `Server up at ${port}`);

// User Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
