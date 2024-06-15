import Express from 'express'
import cors from 'cors'
import fs from 'fs'
// import readjson from './testJson/addFile.json' assert { type: 'json'}
const app = Express()

app.use(cors())
app.use(Express.json())

app.get('/tst/:id', (req, res) => {
  let data = fs.readFileSync('./testJson/addFile.json')
  let parsedFile = JSON.parse(data)
  let fileToRead = parsedFile.filter((item) => item.id === Number(req.params.id))
  res.status(200).send(fileToRead)
})

app.post('/addTeam', (req, res) => {
  let data = fs.writeFileSync('./testJson/addFile.json', req.body)
  let parsedFile = JSON.parse(data)
  res.status(200).send(parsedFile)
})

app.listen(4000, () => {
  console.log('app listening on port 4000')
})