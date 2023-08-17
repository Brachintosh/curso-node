import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./text.txt', 'utf-8'),
  readFile('./text2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('soy el primer texto: ', text)
  console.log('soy el segundo texto: ', secondText)
})
