var express = require("express");
var router = express.Router();
var Campground = require("./campground");

var mongoose = require("mongoose");
var commentSchema = mongoose.Schema({
    text : String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});


module.exports = mongoose.model("Comment", commentSchema);