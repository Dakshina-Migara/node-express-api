const express = require('express');
const router = express.Router();

const {
     saveEmployee 
    } = require('../controllers/employeeController');

router.get('/get', saveEmployee);

module.exports = router;