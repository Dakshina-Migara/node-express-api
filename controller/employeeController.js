const db = require('../db/dbConnection')

const saveEmployee = (req, res) => {
    const { name, age, salary } = req.body;
    if (!name || !age || !salary) {
        return res.status(400).json({ message: 'Name, age, and salary are required' });
    }
    const query = 'INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)';
    db.query(query, [name, age, salary], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: 'Employee saved successfully',
            employeeId: result.insertId
        });
    });
};

module.exports = {
    saveEmployee
};
