//Chapter 1
//Set is a collection of values, 
//where each value may occur only once.

let myFirstSet = new Set();

let Gonzalo = {name: 'Gonzalo'};
let Patrizio = {name: 'Patrizio'};
let Dali = {name: 'Dali'};

//Visit counts of students
myFirstSet.add(Gonzalo);
myFirstSet.add(Patrizio);
myFirstSet.add(Dali);
Gonzalo.name = 'Dali';
myFirstSet.add(Gonzalo);
myFirstSet.add(Patrizio);

console.log(myFirstSet);

//try with Array
let myArr= [];

//Visit counts of students
myArr.push(Gonzalo);
myArr.push(Patrizio);
myArr.push(Dali);
myArr.push(Gonzalo);
myArr.push(Patrizio);

console.log(myArr);

//Chapter 2
//main methods
/*
    - new Set(iterable) – creates the set, 
    optionally from an array of values (any iterable will do).
    - set.add(value) – adds a value, returns the set itself.
    - set.delete(value) – removes the value, returns true 
    if value existed at the moment of the call, otherwise false.
    - set.has(value) – returns true if the value exists in the set, 
    otherwise false.
    - set.clear() – removes everything from the set.
    - set.size – is the elements count.
*/

