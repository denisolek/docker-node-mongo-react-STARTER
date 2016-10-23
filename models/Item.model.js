var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    category: String,
    count: Number
});

module.exports = mongoose.model('Item', ItemSchema);