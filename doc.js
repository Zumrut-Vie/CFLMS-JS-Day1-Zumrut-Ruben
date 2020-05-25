/*console.log("Hi my name is Martin")

var age= 25;

console.log("Hi my name is Martin","and I am" +age+ "years old");*/

players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log(players[2]);


cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat",
    "Ferrari"
];
console.log(cars.sort());

//Intermediate Excercise 2

fruits = ["apple", "banana", "kiwi", ];
fruits.push("orange");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

animals = ["monkey", "horse", "dog"];
animals.reverse();
console.log(animals);
animals.unshift("cat");
console.log(animals);
// other trick for new line of each array item
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);

// ??????????
var fruities = ["mango","cherries","kiwi","grapes","pear","peach","orange","lemon"];
document.write(fruities.join("\n"));

//Advanced Ex 1
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var n = a + b + number(c) + number(d) + e;
console.log(n);

var f = '1';
var g = 15;
var h = 8;
var i= "1";

var z = number(f)*g*h*number(i);
console.log(z);

var result = n/z;
document.write(result);

//Advanced Ex 2

numbersArr [ 
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27], 
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] 
];

console.log(numbersArr[1][1]);
console.log(numbersArr[4][2]);
console.log(numbersArr[5][3]);
console.log(numbersArr[2][3]);
console.log(numbersArr[2][1]);


