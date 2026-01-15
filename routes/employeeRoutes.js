const express = require('express');
const router = express.Router();

const {
    saveEmployee,
    getEmployees,
    deleteEmployee
} = require('../controller/employeeController');

router.post('/save', saveEmployee);
router.get('/all', getEmployees);
router.delete('/delete/:id', deleteEmployee);

module.exports = router;