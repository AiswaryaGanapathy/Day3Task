// for loop

var numbers = [ 10, 20, 30, 40, 50] 
 for (var i=0; i < numbers.length; i++) {
       console.log(numbers[i])
 }
 
// for in

var person = {
   fname: "Aiswarya",
   lname: "Ganapathy",
   age: 26
}; 
for (let x in person) {
   console.log(x + ": "+ person[x])
}

// for of loop

const iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value);
}

// for each loop

var names = ["jerry", "tom", "pluto", "micky", "mini"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}