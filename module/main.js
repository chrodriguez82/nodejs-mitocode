console.log('MainTron Digital Solution');

//usar variables desde otro archivo
let suscipcion=2200;

/* module.exports.subs=suscipcion;
module.exports.saludar=function saludar(){
    console.log('Suscribete al canal coders');
} */


//module.exports.saludar=saludar();

//jason  function flecha => esmacscript 6
module.exports={
    subs:80000,
    saludar: ()=>{
        console.log('Tron Main');
    },//una unica funcion y parametro
    sumar: (a, b)=> a + b,
    mostrar: a => a+10
    /*sumar: (a, b)=>{
      return a + b; 
    }
     mostrar: /a) => a+10*/
    
}