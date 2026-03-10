const http = require('http')
const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === "/" || path.toLocaleLowerCase() === "/home"){
        response.end("you are in Home page")
    } else if (path.toLocaleLowerCase() === '/about') {
        response.end("You are in about page")
    } else if (path.toLocaleLowerCase() === '/contact') {
        response.end("You are in contact page")
    } else {
        response.end("page not found")
    }
})

server.listen(8080, '127.0.0.1',
    ()=>console.log("sever is running on port 8080")
)