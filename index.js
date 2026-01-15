const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/v1/employee', employeeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});