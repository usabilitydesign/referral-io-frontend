console.log('NODE_ENV:', process.env.NODE_ENV);

const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || process.argv[2] || 8000;

const root = fs.realpathSync('./dist');

const app = express();

const sources = [
  'js',
  'js.map',
  'css',
  'css.map'
];

sources.forEach(function(source) {
  app.get(`/app.*.${source}`, function(req, res) {
    fs.createReadStream(path.join(root, `./${req.path}`)).pipe(res);
  });
});

app.get('/img/*', function(req, res) {
  const fn = req.path;
  fs.createReadStream(path.join(root, `./${req.path}`)).pipe(res);
});

app.use(function (req, res) {
  res.sendFile(path.join(root, './index.html'));
});

app.listen(port);

console.log('listening on port', port);