let words1 = ["apple", "cat", "dog", "elephant"];


function get5CharWords(words) {
 for (let i=0; i<words.length; i++){
  return words.length >= 5
 }
}

const result = words1.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
