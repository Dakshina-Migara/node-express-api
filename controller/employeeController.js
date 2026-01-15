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

const getEmployees = (req, res) => {
    const query = 'SELECT * FROM employee';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(
            results
        );
    });
};

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM employee WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({
            message: 'Employee deleted successfully',
            employeeId: id
        });
    });
}

const updateEmployee = (req, res) => {
    const { name, age, salary } = req.body;
    const { id } = req.params;
    const query = 'UPDATE employee SET name = ?, age = ?, salary = ? WHERE id = ?';
    db.query(query, [name, age, salary, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({
            message: 'Employee updated successfully',
            employeeId: id
        });

    });
}

module.exports = {
    saveEmployee,
    getEmployees,
    deleteEmployee,
    updateEmployee
};
