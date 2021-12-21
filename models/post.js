const mongoose = require('mongoose');

//Schema of a post
const postSchema = new  mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},  
    content: {type: String, required: true},
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: false }
});

module.exports = mongoose.model('Post', postSchema);