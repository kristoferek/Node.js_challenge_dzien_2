const fs = require('fs')

fs.readdir('./data/zadanie02', (err, fileNames) => {
  if (err) console.log('Błąd odczytu listy plików', err)
  else {
    console.log('Poprawnie odczytano zawartość folderu', fileNames)
    fileNames.forEach(name => {
      fs.readFile(`./data/zadanie02/${name}`, 'utf8', (err, file) => {
        if (err) console.log('Błąd odczytu pliku', err)
        else {
          console.log(file)
        }
      })
    })
  }
})
