const express = require('express')
const { Router } = express

const app = express()
const port = 8080
const fs = require('fs')

app.use(express.urlencoded({ extended: true }));

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index.hbs'
}))

// app.set('view engine', 'handlebars')
app.set('views', './views')
  

const productos = []

app.get('/', function (req, res){
  res.render('formulario.hbs')
});

app.get('/api/productos', function (req, res){
  console.log(productos)
  res.render('catalogo.hbs', {productos})
});

app.post('/api/productos', function (req, res){
  const producto = req.body
  console.log(producto)
  productos.push(producto)
  res.redirect('/')
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

server.on("error", error => console.log("error", error))