const argv = require('yargs')
                //esta es una confguracion de yargs 
                //esta es la forma de poder tilizar las variables en la consola
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demanOption: true,
                    //es una descripcion que se ve en el comando --help 
                    describe: 'es la base de multiplicar'

                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demanOption: true,
                    default: false,
                    describe: 'para mostrar la tabla'              
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'el limite de la tabla'
                })
                .check( (argv, options) =>{
                    //verificar si cierto check esta bien
                    if(isNaN(argv.b)){
                        throw 'la base tiene que se un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;