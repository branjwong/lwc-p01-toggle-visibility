const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});

app.get('/:exerciseId', function (req, res) {
  res.sendFile(req.params.exerciseId + '/index.html', {
    root: __dirname
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
