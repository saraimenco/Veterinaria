var datos = [];

const mongoose = require('mongoose')
var vetSchema = new mongoose.Schema({   
    nombre:         String,
    edad:           Number,
    direccion:      String,
    nresponsable:   String,
    date: {type:    Date, default: Date.now}

}

);

const Vet = mongoose.model('vet', vetSchema);

module.exports.Vet = Vet
/* 
sesionModel.registro = function(post, callback){
    const instancia = new Vet
    instancia.nombre = post.nombre
    instancia.edad = post.edad
    instancia.direccion = post.direccion
    instancia.nresponsable = post.nresponsable

    instancia.save((error, mascotacreada)=>{
        if (error){
            console.log(error)
            return callback ({state:false, info:error})
        }
        else{
            console.log(mascotacreada)
            return callback ({state:true, info: mascotacreada})
        }
    })

   
} */
