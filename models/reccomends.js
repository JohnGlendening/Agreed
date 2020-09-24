// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var recommended = {
  all: function(cb) {
    orm.all("recommended", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("recommended", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, likeStatus, cb) {
    orm.update("recommended", objColVals, likeStatus, function(res) {
      cb(res);
    });
  },
  delete: function(likeStatus, cb) {
    orm.delete("recommended", likeStatus, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (recommendedController.js).
module.exports = recommended;
