const express = require('express')
const app = express()


app.use(express.json())
app.use(express.static('y'))

app.use((request,response,next)=>{
  console.log(request.body)
  console.log(typeof  request.body)
})

app.listen(3000,()=>{
  console.log('正在监听  3000')
})