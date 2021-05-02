const fs = require('fs')

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
  if (err) console.log('Błąd odczytu', err)
  else {
    console.log('Poprawnie odczytano plik plik', data)
    const expectedNumbers = JSON.parse(data)
    if (Array.isArray(expectedNumbers)) {
      const sum = expectedNumbers.reduce((sum, string) => {
        const expectedNumber = Number(string)
        return isNaN(expectedNumber) ? sum : sum + expectedNumber
      }, 0) + ''
      fs.writeFile('./data/zadanie01/sum.txt', sum, err =>
      {
        if (err) console.log('Błąd zapisu', err)
        else console.log('Poprawnie zapisano plik', sum)
      })
    } else console.log('Błąd danych - oczekiwano tablicy', expectedNumbers)
  }
})
