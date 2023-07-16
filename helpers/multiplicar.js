const fs = require('fs');
const colors = require('colors');


//haciendo con promesa 
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        console.log('=================================='.green)
        console.log('Tabla de multiplicar del: ',colors.blue ( base ));
        console.log('=================================='.green)


        let salida ='';
        for (let i = 1; i <= hasta ; i++){
            salida += `${base} x ${i} = ${base * i}\n` ;
        }

        if(listar){
            console.log(salida)
        }


        //se le da en ./salida/para que ponga en esa carpeta
        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida)

        return 'tabla del ',base,' creada'.green;
    } catch (error) {
        throw error;
    }
    
}

module.exports ={ crearArchivo}

//https://www.npmjs.com/package/colors link de colors