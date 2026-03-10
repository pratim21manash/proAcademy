const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Plesae enter your name", (name) => {
    console.log("Your name is:"+name)
    rl.close();
})

rl.on('close', () => {
    console.log("Interface close")
    process.exit(0);
})

//This Node.js program uses the built-in readline module to create a command-line interface that reads user input from process.stdin, prints the result to process.stdout, and demonstrates asynchronous callbacks and event handling when the interface closes.