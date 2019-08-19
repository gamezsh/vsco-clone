const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  last_name: String,
  phone: String,
  email: String,
  password: String,
  username: String
});

export default mongoose.model('User', userSchema);
