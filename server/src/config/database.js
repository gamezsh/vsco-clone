const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/vsco';

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('database connected...'))
  .catch((err) => console.log(err))

export default mongoose;
