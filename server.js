const express = require('express');
const path = require("path");

const notPage = require('./src/Middleware/notPage');

const router = require('./src/Routes/index');
const bookRouters = require('./src/Routes/books');

const app = express();
app.use(express.urlencoded());

app.set('views', path.join(__dirname, './src/views'));// Показывает, что файл index.ejs лежит не в app/view, а в app/src/view
app.set('view engine', 'ejs');

app.use('/', router);
app.use('/book', bookRouters);

app.use(notPage);

const PORT = process.env.PORT || 3003;
app.listen(PORT, (err)=> {
  if(err) {
    return console.log(`Server not starting - err: ${err}`);
  } else {
    console.log(`Server starting on port: ${PORT}`);
  }
})
