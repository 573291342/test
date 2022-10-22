const express = require('express')
const app = express()

//挂载路由
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.post('/', (req, res) => {
  res.send('Hello world')
})


app.listen(80, () => {
  console.log('80端口启动!');
})