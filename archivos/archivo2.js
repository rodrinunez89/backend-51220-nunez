const fs = require('fs');
const archivo = 'package2.json';
const backup = '.\backup.json';

let info = {
    contenidoStr: '',
    contenidoObj: {},
    size: 0
}


const salvarBackup = async ()=> {
    await fs.promises.writeFile(backup, JSON.stringify(info.contenidoObj), 'utf8');
    console.log('Backup saved successfully');
}


const recuperarJson = async ()=>{
    try{
    const contenido = await fs.promises.readFile(archivo, 'utf-8');
    console.log(contenido);
    info.contenidoObj = contenido; //ASIGNACION DIRECTA COMO STRING
    info.contenidoStr = JSON.parse(contenido); //CONVERSION A OBJETO JSON
    info.size = contenido.length; //CONVERSION
    
    
    salvarBackup();
    }
    catch (error){
        console.log(error);
    }
}

recuperarJson();