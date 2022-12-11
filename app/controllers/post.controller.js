const Post = require("../models/Post");

function postList(cb) {
  Post.find()
    .lean()
    .exec(function (err, post) {
      if (err) {
        cb(err);
      } else {
        cb(null, post);
      }
    });
}

function postGet(id, cb) {
  Post.findById(id).exec(function (err, post) {
    if (err) {
      cb(err);
    } else {
      cb(null, post);
    }
  });
}

module.exports = {
  list: postList,
  get: postGet,
};
