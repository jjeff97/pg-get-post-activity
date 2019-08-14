const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const bookRouter = require('./routes/book.router.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/book', bookRouter);

app.listen(port, () => {
  console.log('listening on port', port);
});