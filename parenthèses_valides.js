/* Ressources consultées
  -https://buzut.net/la-puissance-des-regex/ => REGEX
  -https://github.com/arturnalbandyan/stack-js/blob/master/BalancedParentheses.js
  -https://medium.com/@nalbandean/stack-data-structure-in-javascript-a-simple-guide-to-lifo-7034c8824184
  -chatGPT 
*/

function isValidString(string) {
  const regex = /^[\[\]{}()]+$/;
  return regex.test(string);
  // ^ et $ ancrent le début et la fin => toute la chaîne doit correspondre
  // [] accepte les caractères spécifiés
  // + signifie "au moins un" (ou * si tu acceptes les chaînes vides)
}

// const stringValid = isValidString("()");
// console.log(stringValid);


function isValid(str) {
  if (!isValidString(str)) 
    return console.log("String is not valid")

    let strArray = []; // On crée une pile (tableau vide) pour stocker les symboles ouvrants
    // Une pile est une structure où on ajoute (push) des éléments au bout, et on retire (pop) le dernier élément ajouté.
    for (let char of str) { // On parcourt chaque caractère de la chaîne
      if (char === '(' || char === '{' || char === '[') { 
        strArray.push(char); // Si le caractère est ouvrant, on le met dans la pile, càd qu'on attendra plus tard une parenthèse fermante correspondante
      } else if (char === ')' || char === '}' || char === ']') { // Si on tombe sur une parenthese fermante
        if (strArray.length === 0) return false; // Si la chaine est vide, on ferme sans avoir ouvert => donc invalide
        let last = strArray.pop(); // On récupère le dernier ouvrant de la pile, on retire le dernier caractère ouvrant ajouté dans la pile (le plus récent)
        if (
          (char === ')' && last !== '(') ||
          (char === '}' && last !== '{') ||
          (char === ']' && last !== '[')
        ) {
          return false; // La fermeture ne correspond pas à l’ouverture => invalide
        } // On compare la parenthèse fermante (char) avec le dernier ouvrant (last) récupéré. Si ce ne sont pas des paires correspondantes (par exemple, } ne peut pas fermer (), la chaîne est invalide.
      }
    }
    return true;
  }


console.log(isValid("{}"));
console.log(isValid("{)"));
console.log(isValid("{ab}"));
// console.log(stringToArray("Bonjour"));