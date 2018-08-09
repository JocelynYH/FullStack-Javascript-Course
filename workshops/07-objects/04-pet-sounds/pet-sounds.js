let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

let pluralAnimals = {
  'dog': "Dogs",
  'cat': "Cats",
  'chicken': 'Chickens'
}

// YOUR CODE BELOW

function petSounds(animal, country) {
  for (i=0; i<animalNoises.length; i++) {
    // Access the correct object from the animalNoises array
    let animalObject = animalNoises[i];

    if (animal in animalObject) {
      var pluralAnimal = animal[0].toUpperCase() + animal.slice(1) + "s";
      return `${pluralAnimal} in ${country} say ${animalObject[animal][country]}`;
    }
  }
}


console.log(petSounds('cat', 'Korea'));