const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user_id: String,
  image_path: String,
  caption: String,
  creationDate: String
});

export default mongoose.model('Post', postSchema);
