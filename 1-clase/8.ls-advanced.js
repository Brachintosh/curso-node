const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(picocolors.red(`ERROR! No se pudo leer el directorio llamado: "${folder}"`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // status o informacion sobre el archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'D' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${picocolors.blue(file.padEnd(30))} ${picocolors.bgGreen(fileSize.toString().padStart(30))} ${picocolors.yellow(fileModified.padStart(30))}`
  })

  // Fin de las promesas
  const filesInfo = await Promise.all(filesPromises)
  // Retorno la informacion de todos los archivos
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
