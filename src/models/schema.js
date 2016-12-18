var mongoose = require('../../mongo.js');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
    author: {
        type: String,
        default: 'beace'
    },
    title: {
        type: String
    },
    abstract: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "articles"
});

module.exports = articleSchema;
