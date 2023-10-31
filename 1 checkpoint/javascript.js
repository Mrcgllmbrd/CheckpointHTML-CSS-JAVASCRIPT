/* Partendo da un array di stringhe
const words = ['spray', 'limit', 'elite', 'exuberant', 'present'];
filtra l’array con le parole più lunghe di 5 lettere. Stampa in console la
lunghezza dei due arr */

const words = ["spray", "limit", "elite", "exuberant", "present"];
function lenghtsWord(arr) {
  let wordsLength = [];
  for (word of arr) {
    if (word.length > 5) {
      wordsLength.push(word)
    } 
  } return wordsLength
}
console.log(lenghtsWord(words))
