import path from 'path';
import mongoose from '../mongo.js';
import articleSchema from '../src/models/schema.js';
import marked from 'marked';
import highlightjs from 'highlight.js';

module.exports = function (app) {
  // app.get("*", function(req, res) {
  //   res.sendFile("index.html", { root: path.join(__dirname, "../", "views") });
  // });

  // 以下使用模板引擎
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Article',
    });
  });

  app.get('/about', (req, res) => {
    res.render('index', {
      title: 'About',
    });
  });

  app.get('/contact', (req, res) => {
    res.render('index', {
      title: 'Contact',
    });
  });

  app.get('/work', (req, res) => {
    res.render('index', {
      title: 'work',
    });
  });
  app.get('/article/:id', (req, res) => {
    res.render('index', {
      title: 'article',
    });
  });
  app.get('/admin', (req, res) => {
    res.render('index', {
      title: 'admin',
    });
  });
  app.get('/book', (req, res) => {
    res.render('index', {
      title: 'book',
    });
  });

  app.get('/users', (req, res, next) => {
    res.send('respond with a resource');
  });

  // API
  app.get('/api/articles', (req, res) => {
    const db = mongoose.createConnection('localhost', 'article');
    db.once('open', () => {
      const Article = mongoose.model('articles', articleSchema);
      Article.find(
        {
          author: 'Beace',
        },
        (err, docs) => {
          if (err) console.log(err);
          else {
            res.send(docs);
          }
        }
      );
    });
  });

  app.get('/api/post/:id', (req, res) => {
    const postId = req.params.id;
    const db = mongoose.createConnection('localhost', 'article');
    db.once('open', () => {
      const Article = mongoose.model('articles', articleSchema);
      Article.findOne(
        {
          _id: postId,
        },
        (err, doc) => {
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
                highlight(code) {
                  return highlightjs.highlightAuto(code).value;
                },
              });
              doc.content = marked(doc.content);
            }
            res.send(doc);
          }
        }
      );
    });
  });

  app.post('/api/post', (req, res) => {
    const model = req.body;
    const db = mongoose.createConnection('localhost', 'article');
    db.once('open', err => {
      const Article = mongoose.model('articles', articleSchema);
      const article = new Article(model);
      article.save(model);
      if (err) {
        return err;
      }
      res.send({
        code: 0,
        msg: 'success',
      });
    });
  });
};
