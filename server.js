/* ******************************************
 * This is the application server
 * ******************************************/
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongodb = require('./db/connect')
const env = require('dotenv').config()
const contactsRoutes = require('./routes/contactsRoute');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');




/* ***********************
 * Routes
 *************************/
app.use("/", require("./routes/"))






/* ******************************************
 * Server host name and port
 * ***************************************** */
const host = process.env.HOST
const port = process.env.PORT


app
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if(err) {
      console.log(err)
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`)
    }
})





