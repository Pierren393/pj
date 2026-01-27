// nomDeMonFichier.js
const operand = 12;
const operand2 = 45;

b += a ;
console.log("resultat de a + b = " + b);
// on peut également déclarer et initialiser un objet de la façon suivante :

// let aPerson= new Object();
// aPerson.name = 'Jean';
// aPerson.age = 35;
// aPerson.gender = 'masculin';
// aPerson.interest = ['musique', 'badminton'];
let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();
