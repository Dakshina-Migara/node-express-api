const express = require('express')
const app = express()
const port = 3000

const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/v1/employee', employeeRoutes);

app.get('/', (req, res) => {
  res.send('Hello migara!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})