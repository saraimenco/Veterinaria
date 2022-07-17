const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));




app.use(express.static(path.join(__dirname, 'pages')));

const vet = require('./routes/vet');

app.use(express.json());
app.use('/api/vet/', vet);

const port = process.env.PORT || 3003
app.listen(port, ()=> console.log ('Servidor ejecutando en puerto: '+ port)); 



mongoose.connect('mongodb://localhost/vetdb', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log('Se conecto con mongo DB: TRUE'))
    .catch(()=> console.log('Se conecto con mongo DB: FALSE'))




