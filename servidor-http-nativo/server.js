const http = require("node:http")
const PORTA = 3000

//res de response e req de request
const server = http.createServer((req, res) => {
    console.log(`Requisão recebida! ${req.method} ${req.url}`)
    
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    res.end(JSON.stringify({ status: "ok" }))
})

server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`)
    console.log(new Date().toISOString())
})

//o servidor não devolveria uma resposta para o usuario, pois a requisição não seria resolvida assim o serividor iria ficar carregando infinitamente