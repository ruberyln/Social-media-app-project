const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger=require("morgan")
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comment");
const multer = require("multer");
const cors = require("cors");
const path=require("path")
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(logger("dev"))
app.use("/public", express.static(path.join(__dirname, "/public")));

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
app.use(cors())
app.options({ origin: "http://localhost:3000"}, cors());
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File Upload done.");
});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments",comments);
const port = process.env.PORT || 8060; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));