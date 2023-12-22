const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("It's working!")
  res.end()
})

app.listen(4000, () => {
  console.log('app listening on port 4000')
})