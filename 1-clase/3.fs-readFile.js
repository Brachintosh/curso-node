const fs = require('node:fs')

console.log('Leyendo el primer archivo...')

fs.readFile('./text.txt', 'utf-8', (err, text) => {
  console.log(text)
  if (err) {
    console.error('Error al leer el directorio', err)
  }
})

console.log('Leyendo el segundo archivo...')
fs.readFile('./text2.txt', 'utf-8', (err, text) => {
  console.log(text)
  if (err) {
    console.error('Error al leer el directorio', err)
  }
})
