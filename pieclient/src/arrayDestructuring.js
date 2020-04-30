// Array destructuring is a simplified method of extracting multiple propererties from an array.
// It creates a pattern that describes the kind of value you are expecting. It uses position.

let LotRArray = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(LotRArray[0]);
let firstElementInLotRArray = LotRArray[0];
console.log(LotRArray[1]);
console.log(LotRArray[2]);
// but NOT PRACTICAL.. Could more easily do...

let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(first, second, third);

let [a, , c] = ['Mercury', 'Venus', 'Earth'];
console.log(a, c); // ARRAY Destructuring based on POSITION
                // output will be Mercury Earth with a space between the two, bc assumes there's a 'b'

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let [first, , third, ...others] = planets; // SPREAD OPERATOR
console.log(first);
console.log(third); 
console.log(others); // will log the Array
console.log(...others); // will log the items in the array


// This is happening behind the scenes w useState, which is a HOOK
const [fruit, setFruit] = useState('banana');
let fruitStateVariable = useState('banana'); // returns a pair
let fruit = fruitStateVariable[0]; // first item in the pair
let setFruit = fruitStateVariable[1]; // second item in the pair
