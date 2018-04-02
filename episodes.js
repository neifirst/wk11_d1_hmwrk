// 1.

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// We've declared the var 'name' as having the value 'Keith'.
// We've constructed a function to print 'My name is ' followed by whatever the 'name' variable is, and called it. Expected output: 'My name is Keith'.



// 2.

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// We've declared 'score' (which is default global var) outwith functions and given it a value of '5'.
// We've constructed a function to locally set the var 'score' to 3 and return it.
// We've called the function and logged it. Expected output: 3.



// 3.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// We've declared a global array var ('myAnimals') and given it a value of ['Chickens', 'Cats', 'Rabbits'].
// We've constructed a function to locally alter the value of 'myAnimals' to ['Ducks', 'Dogs', 'Lions'], and the loop through the array and print the index number, followed by a colon, followed by each entry.
// We've called the function. Expected output:
// 0: Ducks
// 1: Dogs
// 3: Lions



// 4.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// We've declared 4 global vars - suspects one to four.
// We've constructed a function which locally sets 'suspectThree' to 'Harvey', then prints out 'Suspects include: ' followed by our three original global vars plus the one we changed locally.
// We call the function, which only alters 'suspectThree' within it.
// We log 'Suspect three is:' followed by the original suspect three, which exists outwith the function.
// Expected output: 'Suspects include: Jay, Val, Harvey, Rick';
//                  'Suspect three is: Keith'.



// 5.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// We've constructed an object called 'detective' with name 'Ace Ventura', pet 'monkey'.
// We've constructed a function (printName()) which returns the name of 'detective'.
// We've made a function (detectiveInfo()) which sets the name of 'detective' to 'Poirot' and returns printName().
// We've logged the function detectiveInfo(), thereby printing the name with the name change to Poirot. Expected output: 'Poirot'.



// 6.

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// We've declared a global var 'murderer' and given it a value of 'rick'.
// We've constructed an outerFunction which locally sets 'murderer' as 'marc', and creates an innerFunction which then locally sets 'murderer' as 'valerie', then calls that innerFunction.
// We've called the outerFunction.
// We've logged 'the murderer is ', followed by the global variable for 'murderer'. Expected output: 'the murdered is rick'.



// 7.

var name = 'Jessica Jones'

function bestShow() {
  var name = 'Iron Fist';
  function displayResult() {
    return `The best show on Netflix is ${name}`;
  }
  return displayResult;
}

var myFave = bestShow();

var originalFlavour = `The best show on Netflix is ${name}`

console.log(myFave());
console.log(originalFlavour);

// It's really hard to screw this up deliberately!


// ---------------------------------------------------


// Mucking about


var getNextGame = function() {
  var games = ['Infamous 3', 'Horizon DLC', 'Ass Creed Origins', 'VR Skyrim', 'Bloodborne', 'Bloody Dark Souls'];
  var shuffle = function(array) {
      let ctr = array.length;
      let temp;
      let index;
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = array[ctr];
          array[ctr] = array[index];
          array[index] = temp;
      }
      return array;
  }
  return (shuffle(games))[0];
}

console.log(getNextGame());


// More mucking about


var makeAdjectives = function(x) {
  return function(y) {
    return `${x}-${y}`;
  };
}

var pureDead = ((makeAdjectives('Pure'))('Dead'));
var superDuper = ((makeAdjectives('Super'))('Duper'));

var makeExpression = function(adj, noun) {
  return `${adj} ${noun}`
}

console.log(makeExpression(pureDead, 'Tasty'));
console.log(makeExpression(superDuper, 'Equals'));


// Even more mucking about


var Spell = function(name, school, damage, cooldown)
{
   this.name = name;
   this.school = school;
   this.damage = damage;
   this.cooldown = cooldown;
}

var spell1 = new Spell("Magic Missile", "Destruction", 20, 100);
var spell2 = new Spell("Fireball", "Destruction", 75, 300);
var spells = [spell1, spell2];

var printSpells = function() {
  for (var spell of spells) {
    console.log(`${spell.name} (${spell.school}) does ${spell.damage} points of damage! (Cooldown: ${spell.cooldown} seconds)`);
  }
}

printSpells();
