//lodash operaciones json
const _ = require('lodash')

//varia el input tradicional
//let comando=process.argv[2];
//console.log(comando);
const argv = require('yargs').argv
//console.log(argv.argv)
//enviar valores a node despues de la invocacion al arch

if(argv.usuario === "MainTron"){
    //if(process.argv[3] === "MainTron"){
        let x = {"nombre": "Jdavys"}
        let y = {"apodo": "MainTron"}

        let z = [
            {nombre: "Jdavys", apellido: "Sabo", edad:37 },
            {nombre: "Main", apellido: "Tron", edad:37 }
        ]

        //concatenar 
        //let resp = _.assign(x,y);
        //console.log(resp);

        //ejecutar una funcion n veces
        //_.times(3,()=> console.log('Suscribe'))

        //busquedas
        let resul=_.find(z,{nombre:"Jdavys"}, {apellido: "Sabo"});
        console.log(resul);      
    
}else{
    console.log("Usuario no válido");
}


