const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/article', { useMongoClient: true });
module.exports = mongoose;
