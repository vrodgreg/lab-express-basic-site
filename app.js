const express = require('express');
// require('dotenv').config()

const app = express();

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

  app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
  });

//   const PORT = process.env.PORT || 3000
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Here we are listening on PORT 3000`)
  } )
  



