var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    count: {type: Number, default: 1}
    },
    {versionKey: false}
);

module.exports = mongoose.model('Item', ItemSchema);