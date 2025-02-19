const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setTimeout(60000); // Set timeout to 60 seconds
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});