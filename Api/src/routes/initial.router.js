const express = require('express');
const route = express.Router();
const initial = require('../controllers/initial.controller');

route.get('/', initial.Index);

module.exports = route;