// A partir de la version Node 16, se reomienda colocar la extension previamente del módulo nativo!
const fs = require('node:fs');

const stats = fs.statSync("./text.txt");

console.log(
    stats.isFile(), // si es un fichero.
    stats.isDirectory(), // si es un directorio.
    stats.isSymbolicLink(), // si es un enlace simbolico.
    stats.size, //tamaño en bytes.
)
