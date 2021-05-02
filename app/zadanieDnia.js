const fs = require('fs')

const path = process.argv[2]
if (!path) return console.log('Błąd - brakuje argumentu')

fs.readFile(path, 'utf8', (err, file) => {
  if (err) console.log('Błąd odczytu pliku', err)
  else {
    let modifiedText = ''
    let isEven = true
    for (let char of file) {
      modifiedText += isEven
        ? char.toUpperCase()
        : char.toLowerCase()
      isEven = !isEven
    }
    fs.writeFile(path, modifiedText, err => {
      if (err) console.log('Błąd zapisu', err)
      else console.log('Poprawnie zapisano plik', modifiedText)
    })
  }
})
