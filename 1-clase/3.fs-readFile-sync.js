const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./text.txt', 'utf-8')
console.log('Primer texto: ', text)

console.log('--->> Puedo hacer otras cosas en el medio...')

console.log('Leyendo el segundo archivo')
const secondText = fs.readFileSync('./text2.txt', 'utf-8')
console.log('Segundo texto:', secondText)
