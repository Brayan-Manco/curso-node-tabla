const { crearArchivo } = require('./helpers/multiplicar');

//esta no es buena practica, en la carpeta config esta el modo optmizado y el mas recomedado de usar

// const argv = require('yargs')
//                 .option('b', {
//                     alias: 'base',
//                     type: 'number',
//                     demanOption: true,
//                 })
//                 .option('l', {
//                     alias: 'listar',
//                     type: 'boolean',
//                     demanOption: true,
//                     default: false,              
//                 })
//                 .check( (argv, options) =>{
//                     if(isNaN(argv.b)){
//                         throw 'la base tiene que se un numero'
//                     }
//                     return true;
//                 })
//                 .argv;

//_______________________________________________________________________________

//aqui se esta exportando la configracion de yargs que esta en la carpeta config 
const argv = require('./config/yargs');


console.log('base: yargs', argv.b, ' listar', argv.l);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));



//_______________________________________________________________________________________

//la librearia yargs es una importacion para poder poder maneja los entornos de consola

// console.log(process.argv);
// console.log(argv)




//_________________________________________________________________________


//el process.argv para aceder a los argumentos desde la consola
//esta forma es la mas sencilla NOTA: no recomendad 

//para esto se utiliza la libreria yars
// const [,,arg3 = '5'] = process.argv;
// const [ ,base = 5] = arg3.split('=');

// console.log(base);

// const base = 7;



//____________________________________________________________________________

//forma basica para implemantar el fs sin capas

// console.log('Tabla de multiplicar del: ', base)

// for (let i = 1; i <= 10; i++){
//     console.log(`${base} x ${i} = ${base * i}` );
// }


// let salida ='';
// for (let i = 1; i <= 10; i++){
    // \n es un salto de linea  
    // += es para concactenar
//     salida += `${base} x ${i} = ${base * i}\n` ;
// }


//writeFile es para escribir una archivo y guadarlo en el proyecto 
//cuando no hay path toma la carpeta del principal del proyeco 
//esto tambien tiene la funcion callback

// fs.writeFile(`tabla del ${base}.txt`,salida, (err)=>{
//     if(err) throw err;
//     console.log('tabla del ',base,' creada')
// })


