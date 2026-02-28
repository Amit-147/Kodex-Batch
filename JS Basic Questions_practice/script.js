// JAVASCRIPT QUESTIONS

// Q-1: Write a function that prints "Hello World".
// function abc() {
//     console.log("Hello World");
// }
// abc();


// Q-2: Write a function that adds two numbers and returns the result.
// function add(a, b) {
//     return a + b;
// }
// console.log(add(16,19));


// Q-3: Write a function that takes a name as a parameter and prints it.
// function abc(name) {
//     console.log(name);
// }
// abc("amit")


// Q-4: Create a function that returns the square of a number.
// function square(num) {
//     return num * num;
// }
// console.log(square(17));


// Q-5: Write a function that checks if a number is even.
// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is even.");
//     }
//     else {
//         console.log(num + " is odd.");
//     }
// }
// isEven(128)


// Q-6: Create a function that returns the last character of a string.
// function lastChar(str) {
//     return str.charAt(str.length - 1);
// }
// console.log(lastChar("Amit Kumar"));


// Q-7: Write a function that returns the first element of an array.
// function abc(arr) {
//     return arr[0];
// }
// console.log(abc([1, 2, 3, 4, 5]));


// Q-8: Write a function that returns the last element of an array.
// function abc(arr) {
//     return arr[arr.length - 1];
// }
// console.log(abc([1, 2, 3, 4, 5]));


// Q-9: Write a function that prints all elements of an array.
// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printArray([1, 2, 3, 4, 5]);


// Q-10: Write a function that returns the length of an array.
// function arrayLength(arr) {
//     return arr.length;
// }
// console.log(arrayLength([1, 2, 3, 4, 5]));


// Q-11: Write a function declaration that multiplies two numbers.
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 6));


// Q-12: Write a function expression that subtracts two numbers.
// var sub = function(a, b) {
//     return a - b;
// }
// console.log(sub(10, 4));


// Q-13: Write an arrow function that converts a string to uppercase.
// var toUpperCase = (str) => {
//     return str.toUpperCase();
// }
// console.log(toUpperCase("hello world"));


// Q-14: Write an arrow function that calculates a number's cube.
// var cube = (num) => {
//     return num * num * num;
// }
// console.log(cube(3));


// Q-15: Create a function that joins two strings and returns the result.
// var joinStrings = (str1, str2) => {
//     return str1 + " " + str2;
// }
// console.log(joinStrings("Hello", "World"));


// Q-16: Write a function that takes two parameters and returns which one is bigger.
// function bigger(a, b) {
//     if (a > b) {
//         return a + " is bigger than " + b;
//     }
//     else if (b > a) {
//         return b + " is bigger than " + a;
//     }
//     else {
//         return "Both numbers are equal.";
//     }
// }
// console.log(bigger(10, 20));


// Q-17: Write a function that takes three parameters and returns the smallest number.
// function smallest(a, b, c) {
//     if (a < b && a < c) {
//         return a + " is the smallest number.";
//     }
//     else if (b < a && b < c) {
//         return b + " is the smallest number.";
//     }
//     else if (c < a && c < b) {
//         return c + " is the smallest number.";
//     }
//     else {
//         return "There is a tie for the smallest number.";
//     }
// }
// console.log(smallest(5, 3, 8));


// Q-18: Write a function that prints any message five times (using a parameter).
// function printMsg(msg) {
//     for (let i = 0; i < 5; i++) {
//         console.log(msg);
//     }
// }
// printMsg("Hello World");


// Q-19: Write a function that takes an array and returns only even numbers.
// function evenNum(arr) {
//     var evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i]);
//         }
//     }
//     return evenNumbers;
// }
// console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Q-20: Write a function that takes an array and returns only odd numbers.
// function oddNum(arr) {
//     var oddNumbers = [];
//     for (let i=0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers.push(arr[i]);
//         }
//     }
//     return oddNumbers;
// }
// console.log(oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Q-21: Write a function that removes the first element of an array (using shift).
// function removeFirst(arr) {
//     arr.shift();
//     return arr;
// }
// console.log(removeFirst([1,2,3,4,5]));


// Q-22: Write a function that adds a value to the start of an array (using unshift).
// function addFirst(arr) {
//     arr.unshift(0);
//     return arr;
// }
// console.log(addFirst([1,2,3,4,5]));


// Q-23: Write a function that removes the last element of an array (using pop).
// function removeLast(arr) {
//     arr.pop();
//     return arr;
// }
// console.log(removeLast([1,2,3,4,5]));


// Q-24: Write a function that adds a value to the end of an array (using push).
// function addLast(arr) {
//     arr.push(6);
//     return arr;
// }
// console.log(addLast([1,2,3,4,5]));


// Q-25: Write a function that uses splice to remove 2 items from index 1.
// function removeItems(arr) {
//     arr.splice(1, 2);
//     return arr;
// }
// console.log(removeItems([1, 2, 3, 4, 5]));


// Q-26: Write a function that checks if a string contains the letter "a".
// function contains(str) {
//     if (str.includes("a") || str.includes("A")){
//         console.log("The string contains the letter 'a'.");
//     }
//     else {
//         console.log("The string does not contain the letter 'a'.");
//     }
// }
// contains("Hello World");
// contains("JavaScript");


// Q-27: Write a function that counts vowels in a string.
// function countVowels(str) {
//     var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         var char = str.charAt(i).toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }   
//     }
//     return count;
// }
// console.log(countVowels("Hello World"));
// console.log(countVowels("JavaScript is awesome!"));


// Q-28: Write a function that reverses a string.
// function reverseString(str) {
//     var reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str.charAt(i);
//     }
//     return reversed;
// }
// console.log(reverseString("Hello World"));


// Q-29: Write a function that checks if a string is empty.
// function isEmpty(str) {
//     if (str.length === 0) {
//         console.log("The string is empty.");
//     }
//     else {
//         console.log("The string is not empty.");
//     }
// }
// isEmpty("");
// isEmpty("Hello World");


// Q-30: Write a function that returns how many spaces are in a string.
// function countSpaces(str) {
//     var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === ' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countSpaces("Hello World"));
// console.log(countSpaces("JavaScript is awesome!"));


// Q-31: Write a function that returns the sum of all numbers in an array.
// function sumArray(arr) {
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// Q-32: Write a function that returns the biggest number from an array.
// function biggestNum(arr) {
//     var biggest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > biggest) {
//             biggest = arr[i];
//         }
//     }
//     return biggest;
// }
// console.log(biggestNum([1, 2, 3, 7, 5]));


// Q-33: Write a function that returns the smallest number from an array.
// function smallestNum(arr) {
//     var smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }
// console.log(smallestNum([1, 2, 3, -7, 5]));


// Q-34: Write a function that doubles each number in an array.
// function doubleArray(arr) {
//     var doubled = [];
//     for (let i = 0; i < arr.length; i++) {
//         doubled.push(arr[i] * 2);
//     }
//     return doubled;
// }
// console.log(doubleArray([1, 2, 3, 4, 5]));


// Q-35: Write a function that removes duplicate items from an array.
// function removeDuplicates(arr) {
//     var unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));


// Q-36: Write a function that takes an array and returns only positive numbers.
// function positiveNum(arr) {
//     var positiveNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveNumbers.push(arr[i]);
//         }
//     }
//     return positiveNumbers;
// }
// console.log(positiveNum([-1, 2, -3, 4, -5, 6]));


// Q-37: Write a function that checks if a number is divisible by 10.
// function isDivisibleBy10(num) {
//     if (num % 10 === 0) {
//         console.log(num + " is divisible by 10.");
//     }
//     else {
//         console.log(num + " is not divisible by 10.");
//     }
// }
// isDivisibleBy10(100);
// isDivisibleBy10(123);


// Q-38: Write a function that prints the index of each item in an array.
// function printIndexes(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("Index of " + arr[i] + " is: " + i);
//     }
// }
// printIndexes(["apple", "banana", "cherry", "date", "elderberry"]);


// Q-39: Write a function that returns the middle element of an array.
// function middleElement(arr) {
//     var middleIndex = Math.floor(arr.length / 2);
//     return arr[middleIndex];
// }
// console.log(middleElement([1, 2, 3, 4, 5]));


// Q-40: Write a function that removes 1 element from the middle of an array using splice.
// function removeMiddle(arr) {
//     var middleIndex = Math.floor(arr.length / 2);
//     arr.splice(middleIndex, 1);
//     return arr;
// }
// console.log(removeMiddle([1, 2, 3, 4, 5]));