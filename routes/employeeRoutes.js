const express = require('express');
const router = express.Router();

const {
    saveEmployee,
    getEmployees,
    deleteEmployee,
    updateEmployee
} = require('../controller/employeeController');

router.post('/save', saveEmployee);
router.get('/all', getEmployees);
router.delete('/delete/:id', deleteEmployee);
router.put('/update/:id', updateEmployee);

module.exports = router;