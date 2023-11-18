const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express()
const port = 5005
const apiRoutes = require("./routes/api")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors())

// Parse JSON request body
app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello, ini halaman ExpressJS pertama saya !!")
})

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port} ...`)
})