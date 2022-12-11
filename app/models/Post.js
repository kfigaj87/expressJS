const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  username: String,
  email: String,
  addres: Object,
  phone: String,
  website: String,
  company: Object,
});

module.exports = mongoose.model("Post", schema);
