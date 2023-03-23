const express = require('express')
const path=require('path')
const app = express()
const multer  = require('multer')
const {mergerpdfs}=require("./merge")
const upload = multer({dest:'uploads/'})
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})


app.post('/merge', upload.array('pdfs'),async function (req, res, next) {
await mergerpdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
res.redirect("http://localhost:3000/static/merged.pdf")
  // res.send({data:req.files})
})

+9
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})