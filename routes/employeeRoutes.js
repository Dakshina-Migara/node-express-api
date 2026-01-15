const express = require('express');
const router = express.Router();

const {
     saveEmployee 
    } = require('../controller/employeeController');

router.get('/get', saveEmployee);

module.exports = router;