//const http = require('http');

import app from './src/app.js'
const port = process.env.PORT || 3000;

// const rotas = {
//     '/':'Curso de Node',
//     '/livros': 'Entrei na pag de Livros',
//     '/autores':'Listagem de autores',
//     '/editora':'Pagina de Editora',
//     '/cesar':'Pagina do Cesar'
// }
// biblioteca nodemon auxilia na hora de executar o codido pois não precisa ficar recarregando o servidor a cada alteração no codigo
// const server = http.createServer((req , res) =>{
//     res.writeHead(200 , {'Content-Type':'text/plain'});
//     res.end(rotas[req.url]);
// })
// ctrl+c para parar o servidor no terminal
app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})