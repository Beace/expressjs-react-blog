const mongoose = require('../../mongo.js');
const Schema = mongoose.Schema;
const articleSchema = new Schema(
  {
    author: {
      type: String,
      default: 'beace',
    },
    title: {
      type: String,
    },
    abstract: {
      type: String,
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'articles',
  }
);

module.exports = articleSchema;
