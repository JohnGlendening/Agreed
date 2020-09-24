var express = require("express");

var router = express.Router();

// Import the model (reccomends.js) to use its database functions.
var recommend = require("../models/reccomends.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  recommend.all(function (data) {
    var hbsObject = {
      recommended: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/recommended", function (req, res) {
  recommend.create([
    "movie_id", "movie_title", "guest_like", "host_like"
  ], [
    req.body.movie_id, req.body.movie_title, req.body.guest_like, req.body.host_like
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/recommended/:id", function (req, res) {
  var likeStatus = "id = " + req.params.id;

  console.log("likeStatus", likeStatus);

  recommend.update({
    guest_like: req.body.guest_like
  }, likeStatus, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.put("/api/recommended/:id", function (req, res) {
  var likeStatus = "id = " + req.params.id;

  console.log("likeStatus", likeStatus);

  recommend.update({
    host_like: req.body.host_like
  }, likeStatus, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.delete("/api/recommended/:id", function (req, res) {
  var likeStatus = "id = " + req.params.id;

  recommend.delete(likeStatus, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
