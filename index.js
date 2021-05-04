const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');
  const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
  
  // setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpleapi'
  })



// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// routers
const usersRouter = require('./routes/users');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/users', usersRouter);

app.use(
    '/api-crud',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
  
app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));