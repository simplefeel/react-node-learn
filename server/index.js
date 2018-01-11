var express = require('express')
const path = require('path')
var app = express()
const port = process.env.PORT || 8080


// 设置浏览器可以直接访问的静态文件目录，例如localhost:9000/index.html
app.use(express.static('public'))

// 通配路由，返回生产环境index.html，然后由前端代码处理交互以及路由跳转等
app.get('*', function (request, response){
    response.sendFile(path.resolve('public/index.html'))
})

// 接受前端login请求，返回数据
app.post('/login', function (req, res) {
    res.send('POST request to the homepage')
})

// 监听服务
app.listen(port, function () {
    console.log('Example app listening on port 9000!')
})