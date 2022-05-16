const express = require('express')
const sequelize = require('sequelize')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

/* Static é utlizado para carregar arquivos estaticos: imagem, css e arquivos js */
app.use(express.static('public'))

/* Rotas */
app.get('/', (req, res) => {
    res.render('index')
})

/* Body parser: é utilizado para trabalhar com formularios no EXPRESS */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(8080, () => {
    console.log('Aplicação iniciada com sucesso 🚀 ')
})