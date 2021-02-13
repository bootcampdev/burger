const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//
// api routes

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) 
    {
        burger.insertOne(
            [
                "name", "sleepy"
            ], 
            [
                req.body.name, req.body.sleepy
            ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
