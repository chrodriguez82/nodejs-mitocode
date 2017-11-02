const fs=require('fs');

console.log('First');
//Asincrono por dafult
/* fs.readFile('data.txt','utf-8',(error,data)=>{
    if(error){
        console.log(`error en el archivo ${error}`);
    }else{
        console.log(data);  
    }
});
 */


//Syncrono
let data = fs.readFileSync('data.txt','utf-8');
console.log(data);
console.log('seconds');

//renombrar
/* fs.rename('newData.txt','data.txt',(error)=>{
    if(error) throw error;
    console.log('Exitoso');
}); */

//escribir
/* fs.appendFile('data.txt','\nnew day',(err)=>{
    if(err){
        throw err;
    }
});

//eliminar
fs.unlink('data.1.txt',(err)=>{
    if(err) throw err
    console.log('Eliminadi')
}); */


//copiado
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data2.txt'));

//leer el contenido de un directorio
fs.readdir('./../../nodejs',(err,fls)=>{
    fls.forEach(fls=>{
        console.log(fls);
    });
});

//instalar package json npm init ; module=npm i module --save y npm i
//desinstalar npm uninstall lodash --save