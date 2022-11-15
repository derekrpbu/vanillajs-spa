const express = require("express")
const path = require("path")

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static"))) // Middleware to serve the static directory

app.get("/*", (req, res) => {   // when accesing any route we are going to render index.html
  res.sendFile(path.resolve("frontend", "index.html"))
})

app.listen(3000, () => console.log("Server listening"))