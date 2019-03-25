//For store data  => Array
//Also use keys => Object
//Keys with datatype => Map
//

//chapter 1
//Map allows keys of any type.
let myFirstMap = new Map();

myFirstMap.set('1', 'firstValue'); // string key
myFirstMap.set(1, 'secondValue'); // number key
myFirstMap.set(true, ' thirdValue'); //boolean key

//on map we can set also data types
console.log(myFirstMap.get(1));
console.log(myFirstMap.get('1'));

let myObject = {};

//on object we can set just value for the keys
myObject['1'] = 'firstVal';
//NExt line crashes the code
//myObject.1 = 'secondVal';

console.log(myObject);

//chapter 2
//we can use objects as key with maps
let car = {brand:'BMW'}

//for every brand, store their counts
let carCount = new Map();

//map the BMW count
carCount.set(car, 100);

console.log('you have' + 
            carCount.get(car) + 
            car.brand);

console.log(carCount);


//try with object
let carCountObject = {};

//map the BMW count
carCountObject[car] = 100;

console.log(carCountObject);


//Chapter 3
//Set initial data for map

//with array
let mapFromArray = new Map([
    ['1', 'firstVal'],
    [1, 'secondVal'],
    [true, 'boolVal']
]);

console.log(mapFromArray);

//with objects
let mapFromObject = new Map(Object.entries({
    name: 'Bulent',
    company: 'DCI'
}));

console.log(mapFromObject);


//Chapter 4
//main methods
/*
    - new Map() – creates the map.
    - map.set(key, value) – stores the value by the key.
    - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    - map.has(key) – returns true if the key exists, false otherwise.
    - map.delete(key) – removes the value by the key.
    - map.clear() – clears the map
    - map.size – returns the current element count.
*/
//Create a map from object
let mapForMain = new Map(Object.entries({
    name: 'orange',
    color: 'orange',
    taste: 'saure'
}));

//Use set because object does not support data type on key
mapForMain.set(2, 'number');
mapForMain.set('2', 'text');

//has method supports data types
let testResult = mapForMain.has('2'); // true
//let testResult = mapForMain.has(2); // true

console.log(testResult);
console.log(mapForMain);

//delte member with the key
mapForMain.delete('taste');
console.log(mapForMain);

//get size of map
console.log(mapForMain.size);

//clear the map
mapForMain.clear();
console.log(mapForMain);

//Chapter 5
//Iteration over Map

let fruitMap = new Map([
    ['orange', 10],
    ['banana', 50],
    ['apple', 30]
]);

// iterate over keys (fruits)
for(let fruit of fruitMap.keys()){
    console.log(fruit);
}

// iterate over values (amounts)
for(let amount of fruitMap.values()){
    console.log(amount);
}

// iterate over entries [key,value]
for(let entry of fruitMap){
    console.log(entry);
}