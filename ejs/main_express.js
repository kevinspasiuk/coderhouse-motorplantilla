const express = require('express')
const { Router } = express

const app = express()
const port = 8080
const fs = require('fs')

app.use(express.urlencoded({ extended: true }));


// Set up del motor de plantillas
app.set('views', './views');
app.set('view engine', 'ejs');


const productos = []

app.get('/', function (req, res){
  res.render('index')
});

app.get('/api/productos', function (req, res){
  console.log(productos)
  res.render('catalogo', {productos})
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