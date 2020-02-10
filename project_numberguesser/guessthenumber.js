let name = prompt("Welkom! Wat is je naam?");

alert("Hey " + name);

let answer = Math.floor(Math.random() * 25);
let numVisitor;

while (parseInt(numVisitor) != answer) {
  numVisitor = prompt(
    "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
  );
  if (parseInt(numVisitor) == answer) {
    alert("Goed geraden! Tot de volgende keer " + name);
    break;
  } else {
    numVisitor = alert("Jammer! Je hebt het nummer helaas niet geraden.");
  }
}
