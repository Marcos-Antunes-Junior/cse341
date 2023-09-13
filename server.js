/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express")
const env = require("dotenv").config()
const app = express()




/* ***********************
 * Routes
 *************************/
app.use("/", require("./routes/"))



/* ******************************************
 * Server host name and port
 * ***************************************** */
const host = process.env.HOST
const port = process.env.PORT

// log to confirm server operation
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
  })


