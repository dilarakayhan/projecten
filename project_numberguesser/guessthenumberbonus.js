let name = prompt("Welkom! Wat is je naam?");

alert("Hey " + name);

minNumber = prompt(name + ", wat is het laagste nummer dat je wilt raden?");
maxNumber = prompt("Ok, en wat is het hoogste nummer dat je wilt raden?");

let answer =
  parseInt(minNumber) + Math.floor(Math.random() * (maxNumber - minNumber) + 1);
let numVisitor;
let guesses = 5;
let guessMessage =
  "Voer een nummer in van " +
  minNumber +
  " tot " +
  maxNumber +
  " om te beginnen met raden...";

while (guesses > 0) {
  numVisitor = prompt(guessMessage);
  guesses = guesses - 1;
  if (parseInt(numVisitor) == answer) {
    alert("Goed geraden! Tot de volgende keer " + name);
    break;
  } else {
    numVisitor = alert(
      "Jammer! Je hebt het nummer helaas niet geraden. Je hebt nog maar " +
        guesses +
        " pogingen over."
    );
  }
}

if (guesses == 0) {
  alert(
    "Je hebt geen pogingen meer. Het nummer was " +
      answer +
      ". Volgende keer beter! Het spel wordt nu beëindigd."
  );
}
