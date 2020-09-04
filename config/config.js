let config = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs')
    .command('Listar', 'Tablas', config)
    .command('Crear', 'Tablas', config).help().argv;

module.exports = {
    argv
}