const http = require('http')
const server = http.createServer((request, response) => {
    response.end('Hello from the server')
    console.log("A new request received")
    // console.log(response)
})

server.listen(8080, '127.0.0.1' ,()=>console.log("sever is running on port 8080"))