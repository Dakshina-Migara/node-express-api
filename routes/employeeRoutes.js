const express = require('express');
const router = express.Router();

const {
    saveEmployee,
    getEmployees
} = require('../controller/employeeController');

router.post('/save', saveEmployee);
router.get('/all', getEmployees);

module.exports = router;