const fs = require('fs');
const colors = require('colors');

let printTable = (base, limite) => {
    return new Promise((resolve, reject) => {

        let resultado = '';
        console.log(`====== Tabla de ${base} ======`.green)



        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${ base * i} \n`;
        }


        resolve(resultado);

    });
}

let generaArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        let resultado = '';
        let path = `tablas/Tabla-${base}-limite-${limite}.txt`;
        let name = `Tabla-${base}-limite-${limite}.txt`;
        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${ base * i} \n`;
        }

        fs.writeFile(path, resultado, (err) => {


            if (err) {
                reject(`Error al generar el archivo de la tabla ${name} |  ${ err }`);
            } else {
                resolve(name);
            }
        });
    });
}





module.exports = {
    generaArchivo,
    printTable

}