const express = require('express');

exports.Index = function(req, res){
    res.json({text : "Index of the api"});
}