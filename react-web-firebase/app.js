const express = require('express');
const fallback = require('express-history-api-fallback');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(fallback('index.html', { root: __dirname }));

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

// to implement: https://www.npmjs.com/package/express-history-api-fallback for heroku
