const os = require('node:os');

console.log("Info del sistema operativo");
console.log("---------------------------");

console.log("Nombre del sistema operativo", os.platform())
console.log("Versión del sistema operativo", os.release())
console.log("Arquitectura", os.arch())
console.log("CPUs", os.cpus())
console.log("Memoria libre", os.freemem() / 1024 / 1024) // Megas
console.log("Memoria total", os.totalmem() / 1024 / 1024) // Megas
// Dias de pc encendido:
console.log("Uptime: ", os.uptime() / 60 / 60)