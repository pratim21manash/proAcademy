const http = require('http')
const server = http.createServer((request, response) => {
    console.log("A new request received")
})

server.listen(8080, '127.0.0.1' ,()=>console.log("sever is running on port 8080"))