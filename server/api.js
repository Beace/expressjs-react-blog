import marked from 'marked';
import highlightjs from 'highlight.js';
import mongoose from '../mongo';
import articleSchema from '../src/models/schema';

/* eslint-disable no-console */

module.exports = app => {
  // allow custom header and CORS
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
  });

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
        res.send({
          code: 0,
          msg: err,
        });
      }
      res.send({
        code: 0,
        msg: 'success',
      });
    });
  });
};
