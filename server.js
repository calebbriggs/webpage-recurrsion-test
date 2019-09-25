const express = require('express');
const app = express();
const port = 3010;
const fetch = require('node-fetch');
var cors = require('cors');
app.use(cors());
app.get('/', async (req, res) => {
  var resp = await fetch(req.query.page);
  var page = await resp.text();
  res.send(page);
});

app.listen(port, () => console.log(`Recurrsive app listening on port ${port}!`));
