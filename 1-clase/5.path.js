const path = require('node:path')
// Barra separadora de carpetas segun sistema operativo
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Base retorna el nombre completo del archivo
const base = path.basename('/tmp/midu-secrets-files/password.txt')
console.log(base)

// Retornar solo el nombre del archivo
const fileName = path.basename('/tmp/midu-secret-files/password', 'txt')
console.log(fileName)

// Extension de un archivo
const extension = path.extname('my.super.image.jpg')
console.log(extension)
