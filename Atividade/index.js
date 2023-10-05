/*Comandos
Para iniciar um projeto Node: npm init -y
Para instalar modulos: npm install express nodemon express-handlebars
Para rodar o nodemon: npx nodemon index (nome do arquivo)
*/
const express = require('express');
const app = express()
const porta = 3000;
const path = require('path')

//direcionando a variável basepath para a pasta de templates
const basepath = path.join(__dirname, 'templates')

app.get('/',(req, res) =>{
    res.sendFile(`${basepath}/index.html`)
})


/*app.get('/',(req, res) =>{
    res.send('Olá mundo')
})
*/

//Servidor
app.listen(porta, ()=>{
    console.log('Servidor rodando na porta 3000')
})