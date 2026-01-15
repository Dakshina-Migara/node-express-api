const express = require('express');
const router = express.Router();

const {
     saveEmployee 
    } = require('../controller/employeeController');

router.post('/save', saveEmployee);

module.exports = router;