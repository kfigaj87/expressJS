require("dotenv").config();
const express = require("express");
const app = express();

const hbs = require("express-handlebars");

const postApi = require("./app/api/postApi");

const postController = require("./app/controllers/post.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use("/api/post", postApi);

app.get("/", function (req, res) {
  res.render("home", {
    title: "Tytuł z Express",
    content: "Cześć programisto",
  });
});

app.get("/usersData", function (req, res) {
  postController.list(function (err, posts) {
    if (err) {
      res.send(err);
    }
    res.render("users", { posts });
  });
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Serwer Node.js działa");
});
