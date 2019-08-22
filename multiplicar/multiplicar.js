// requireds
//const fs = require('express');
//const fs = require('./fs');
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } como base, no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } como límite, no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`El archivo tabla-${ base }.txt ha sido creado.`.yellow);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('==================================================='.green);
    console.log(`================= Tabla del ${ base } =====================`.green);
    console.log('==================================================='.green);
    if (!Number(base)) {
        console.log(`El valor introducido ${ base } como base, no es un número.`);
    }

    if (!Number(limite)) {
        console.log(`El valor introducido ${ limite } como límite, no es un número.`);
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};