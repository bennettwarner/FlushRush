const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  id: Number,
  comment: String,

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;