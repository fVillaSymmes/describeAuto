const fs = require('fs/promises');

const argPorConsola = process.argv.slice(2)

const sobrescribirAutos = async (contenido) => {
    try {
        await fs.writeFile('autos.json', contenido, 'utf8')
        console.log('Los datos han sido cambiados exitosamente');
    } catch (error) {
        console.log(error);
    }}

const consultaAutos = async () => {
    try {
        const datos = await fs.readFile('autos.json')
        const prueba = JSON.parse(datos)
        console.log(prueba.ferrari);
        const datosAutos = Object.entries(JSON.parse(datos))
        if (argPorConsola[0] == 'leer') {
            if (argPorConsola[1] == 'ferrari' || 'porsche' || 'lamborghini') {
            switch (argPorConsola[1]) {
                case 'ferrari':
                    console.log(datosAutos[0]);
                break;
                case 'porsche':
                    console.log(datosAutos[1]);
                break;
                case 'lamborghini':
                    console.log(datosAutos[2]);
                break;
                case undefined:
                    console.log(datosAutos);
                break;
                }
            } 
        }else if(argPorConsola[0] == 'ferrari' || 'porsche' || 'lamborghini') {
            switch (argPorConsola[0]) {
                case 'ferrari':
                    if (argPorConsola[1] != undefined && argPorConsola[2] != undefined) {
                        datosAutos[0][1][argPorConsola[1]] = argPorConsola[2];
                    }
                    prueba.ferrari = Object.assign(datosAutos[0][1])
                    sobrescribirAutos(JSON.stringify(prueba, null, 2));
                    break;
                case 'porsche':
                    if (argPorConsola[1] != undefined && argPorConsola[2] != undefined) {
                        datosAutos[1][1][argPorConsola[1]] = argPorConsola[2];
                    }                    
                    prueba.porsche = Object.assign(datosAutos[1][1])
                    sobrescribirAutos(JSON.stringify(prueba, null, 2));
                    break;
                case 'lamborghini':
                    if (argPorConsola[1] != undefined && argPorConsola[2] != undefined) {
                        datosAutos[2][1][argPorConsola[1]] = argPorConsola[2];
                    }
                    prueba.porsche = Object.assign(datosAutos[2][1])
                    sobrescribirAutos(JSON.stringify(prueba, null, 2));
                    break;  
            }
        }
} catch (error) {
    console.log(error);
}
}

consultaAutos()


