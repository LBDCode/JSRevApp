var express = require("express");

var router = express.Router();

var rev = require("../models/revenue.js");

router.get("/", function(req, res) {
    rev.all(function(data) {
        var hbars = {
            projects: data
        };
        console.log(hbars);
        res.render("index", hbars);
    });
});

router.get("/project/:id", function(req, res) {

    rev.single(req.params.id, function(data) {
        var hbars = {
            projNum: data[0].proj_num,
            projName: data[0].proj_name,
            project: data
        };
        console.log(hbars)
        res.render("single-proj", hbars);
    });

});

module.exports = router;