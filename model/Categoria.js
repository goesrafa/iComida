const mongoose = require('mongoose')

//criando o Schema Categoria
const CategoriaSchema = mongoose.Schema({
    nome:{
        type: String,
        unique: true //Criação unica de indice
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    }
},{timestamps: true})

module.exports = mongoose.model('categoria', CategoriaSchema)