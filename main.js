// nomDeMonFichier.js
const operand = 12;
const operand2 = 45;

let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Dimanche";
    break;
  case 1:
    day = "Lundi";
    break;
  case 2:
     day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Samedi";
}
console.log("Aujourd'hui nous sommes " + day);