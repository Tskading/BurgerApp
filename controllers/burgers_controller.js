var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log(data);
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, false], function(result) {
      res.json({id: result.insertId});

      console.log(result);
    });
  });

  router.put("/api/burgers/:id", (req, res) => {
    var id = req.params.id;

    burger.update({devoured: true}, {id: id}, result => {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;