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

/*
Extra) Create objects for every entry. Object name will be your brand name.
        Objects will have 2 properties. 
        1. key: name
        2. key: numberType (single even) 

        Do this with for loop not maually!

        */

//----------Task For Maps-------------//
/*
    1) Create a Map and name it taskMap.

    2) Create entries with numbers for taskMap and set some brands for values.

    3) create two lists for odd and even numbers. Lists can be array.
        ! you should use for-of

    4) Log two lists on console

    5) Create objects for every number until count of brands. These objects will contain
    numberType as key and value will be single or even.
    
    let o1 = {numberType: 'odd'};
    let o2 = {numberType: 'even'};
    let o3 = {numberType: 'odd'};
    ...
    ! do not write this code. Just result will be same. 
    ! You should produce this result with for or for-of

    6) Create new 2 Maps and use these objects as key. You will produce the maps from your
    arrays. (Hint: You need for loop) 

    o1{numberType: 'odd'}, Apple

*/

//Step 1
let taskMap = new Map();

//Step 2
taskMap.set(1, 'Apple');
taskMap.set(2, 'Samsung');
taskMap.set(3, 'Huawei');
taskMap.set(4, 'Hp');

//Step 3
let odd = [];
let even = [];

for(let key of taskMap.keys()){
    if (key % 2 == 0){
        even.push(taskMap.get(key));
    } else{
        odd.push(taskMap.get(key));
    }
}

console.log('Odd List: ' + odd +'\nEven List: ' + even);

console.log(odd);
console.log(even);

//Step 5
let oddMap = new Map();
let evenMap = new Map();

for(i=0; i < odd.length; i++){
    oddMap.set({numberType: 'odd'}, odd[i]);
}

for(i=0; i < even.length; i++){
    evenMap.set({numberType: 'even'}, even[i]);
}

console.log(oddMap);
console.log(evenMap);
