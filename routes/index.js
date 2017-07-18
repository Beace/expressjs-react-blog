import path from "path";
import mongoose from "../mongo.js";
import articleSchema from "../src/models/schema.js";
import marked from "marked";
import highlightjs from "highlight.js";

module.exports = function(app) {
  // app.get("*", function(req, res) {
  //   res.sendFile("index.html", { root: path.join(__dirname, "../", "views") });
  // });

  // 以下使用模板引擎
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Article"
    });
  });

  app.get("/about", function(req, res) {
    res.render("index", {
      title: "About"
    });
  });

  app.get("/contact", function(req, res) {
    res.render("index", {
      title: "Contact"
    });
  });

  app.get("/work", function(req, res) {
    res.render("index", {
      title: "work"
    });
  });
  app.get("/article/:id", function(req, res) {
    res.render("index", {
      title: "article"
    });
  });
  app.get("/admin", function(req, res) {
    res.render("index", {
      title: "admin"
    });
  });
  app.get("/book", function(req, res) {
    res.render("index", {
      title: "book"
    });
  });

  app.get("/users", function(req, res, next) {
    res.send("respond with a resource");
  });

  //API
  app.get("/api/articles", function(req, res) {
    var db = mongoose.createConnection("localhost", "article");
    db.once("open", function() {
      var Article = mongoose.model("articles", articleSchema);
      Article.find(
        {
          author: "Beace"
        },
        function(err, docs) {
          if (err) console.log(err);
          else {
            res.send(docs);
          }
        }
      );
    });
  });

  app.get("/api/post/:id", function(req, res) {
    var postId = req.params.id;
    var db = mongoose.createConnection("localhost", "article");
    db.once("open", function() {
      var Article = mongoose.model("articles", articleSchema);
      Article.findOne(
        {
          _id: postId
        },
        function(err, doc) {
          if (err) console.log(err);
          else {
            if (doc) {
              marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                highlight: function(code) {
                  return highlightjs.highlightAuto(code).value;
                }
              });
              doc.content = marked(doc.content);
            }
            res.send(doc);
          }
        }
      );
    });
  });

  app.post("/api/post", function(req, res) {
    let model = req.body;
    var db = mongoose.createConnection("localhost", "article");
    db.once("open", function(err) {
      var Article = mongoose.model("articles", articleSchema);
      var article = new Article(model);
      article.save(model);
      if (err) {
        return err;
      }
      res.send({
        code: 0,
        msg: "success"
      });
    });
  });
};
