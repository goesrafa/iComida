const express = require('express')
require('dotenv').config() //Carrega as "variáveis de ambiente"
const InicializaMongoServer = require('./config/Db')
//Definindo as rotas da aplicação
const rotasCategoria = require('./routes/Categoria')

//Inicializamos o servidor MongoDB
InicializaMongoServer()

const app = express()
//Porta default
const PORT = process.env.PORT
//Parse conteúdo
app.use(express.json())
app.get('/', (req, res) => {
   
    res.json({mensagem: "API iComida 100% funcional!!👏 ",
              versao: '1.0.1'})
})
/**Rotas da categoria */
app.use('/categorias', rotasCategoria)
app.listen(PORT, (req, res) =>{
    console.log(`💻Servidor WEB iniciado na porta ${PORT}`)
})