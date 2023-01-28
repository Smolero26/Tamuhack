const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/submit', (req, res) => {
  const { boardingNumber, additionalInfo } = req.body;
  fs.appendFileSync('data.txt', `${boardingNumber}: ${additionalInfo}\n`);
  res.send('Data saved');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});