const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')

fs.readFile('./text.txt', 'utf-8')
  .then(text => {
    console.log('soy el primer texto: ', text)
  })

console.log('Leyendo el segundo archivo...')
fs.readFile('./text2.txt', 'utf-8')
  .then(text => {
    console.log('soy el segundo texto: ', text)
  })
