//sistema Ope
const os = require('os');
//archivos
const fs = require('fs');

//mis Archivos
const mt= require('./main.js');


//funcioes del Sistema Ope
let cpu = os.cpus();
let sistema = os.platform();
let usuario= os.hostname();


//console.log(usuario);*/
 
//crear archivos --funcion callback --flecha
/* fs.appendFile('maintron.txt','Suscribete al canal: '+JSON.stringify(cpu),function(error){
    if(error){
        console.log('Error en el archivo');
    }
        
}); */

//string template ´´ ecmascript 6
/* let string_cpu= JSON.stringify(cpu);
fs.appendFile('maintron.txt',`Suscribete al canal: ${string_cpu}`  ,function(error){
    if(error){
        
        console.log('Error en el archivo');
    }
        
}); */

setTimeout(()=>{
    console.log('Termine');
},2000);//2 seg

/* console.log(mt.subs);
mt.saludar();
console.log(mt.sumar(5, 4));
console.log(mt.mostrar(10)); */