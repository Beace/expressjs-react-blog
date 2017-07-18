const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/article');
module.exports = mongoose;
