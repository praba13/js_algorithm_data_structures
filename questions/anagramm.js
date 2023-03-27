function isAnagram(word1, word2) {
  // Um die Groß-/Kleinschreibung zu ignorieren, wandeln wir beide Wörter in Kleinbuchstaben um
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  // Wenn die beiden Wörter nicht dieselbe Länge haben, können sie keine Anagramme sein
  if (word1.length !== word2.length) {
    return false;
  }

  // Wir wandeln die Buchstaben beider Wörter in Arrays um, sortieren sie und vergleichen die Ergebnisse
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');

  // Wenn die sortierten Arrays übereinstimmen, sind die Wörter Anagramme
  return sortedWord1 === sortedWord2;
}

// Beispielaufruf:
console.log(isAnagram('Listen', 'Silent')); // true
console.log(isAnagram('hello', 'world')); // false
