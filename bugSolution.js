const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello from Express!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Something went wrong'); // Send error response
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}