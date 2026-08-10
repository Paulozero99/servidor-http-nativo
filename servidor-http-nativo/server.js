const http = require("node:http")
const PORTA = 3000

//res de response e req de request
const server = http.createServer((req, res) => {
    console.log(`Requisão recebida! ${req.method} ${req.url}`)
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=uft-8')

    res.end("Servidor nativo funcionando!")
})

server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`)
})