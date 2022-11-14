const express = require("express")
const path = require("path")

const app = express()

app.get("/*", (req, res) => {   // when accesing any route we are going to render index.html
  res.sendFile(path.resolve("index.html"))
})

app.listen(3000, () => console.log("Server listening"))