const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    // Error handling is missing here!
    console.error('Error:', err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}