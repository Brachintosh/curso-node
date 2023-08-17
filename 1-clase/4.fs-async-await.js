const { readFile } = require('node:fs/promises');
// IIFE = Inmediately Invoked Function Expression
(
  async () => {
    console.log('Leyendo el primer archivo...')

    const text = await readFile('./text.txt', 'utf-8')
    console.log('soy el primer texto: ', text)

    console.log('Hacer otras cosas mientras tanto...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./text2.txt', 'utf-8')
    console.log('soy el segundo texto: ', secondText)
  }
)()
