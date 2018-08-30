const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.enviroment.port||3000;

require('./hbs/helpers');


///////////STATIC CONTENT/////////////

app.use(express.static(__dirname + '/public'))


///////////PARTIALS//////////

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');


////////////ROUTES//////////////

app.get('/', (req, res) => {

  res.render('home',{nombre:'Javier martinez',})})


app.get('/about',(req,res)=>{

  res.render('about')})


////////////SERVER//////////////

app.listen(port,()=>{console.log(`Escuchando peticiones en el puerto ${port}`)})
