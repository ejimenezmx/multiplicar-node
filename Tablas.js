let argv = require('./config/config').argv;
const colors = require('colors');
const { generaArchivo, printTable } = require('./multiplicar/multiplicar');

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];



if (base != undefined) {

    switch (comando) {
        case 'Listar':
            printTable(base, limite).then(mensaje => {

                console.log(mensaje);

                console.log(`============================`.green)

            }).catch(err => console.log(err));
            break;
        case 'Crear':
            generaArchivo(base, limite)
                .then(archivo => console.log(`Archivo creado: `, archivo))
                .catch(e => console.log(e));
            break;

        default:
            console.log('Comando no reconocido')
            break;
    }


} else {
    console.log(`La base es requerida`);
}