'use strict';

// function calcAge(birthyear) {
//     const age = 2037 - birthyear;
//     function printAge() {
//         let output = `${firstName} You're ${age}, born in ${birthyear}`;
//         console.log(output);

//         if (birthyear => 1991 && birthyear <= 1996) {
//             var millenial = true;
//             //creating new variables with same name as outer scopes variable
//             const firstName = 'Song';

//             //Reassigning outer variable
//             const output = 'New Output';

//             const str = `Oh, and you're a millenial,  ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//         printAge();
//         return age;

//     }

//     const firstName = 'Jonas';
//     calcAge(1991);



//     // Hoistin and TDZ in Practice.

//     // Variables
//     // console.log(me);
//     // console.log(job);
//     // console.log(year);

//     // var me = 'Jonas';
//     // let job = 'teacher';
//     // const year = 1991;

//     // Functions

//     console.log(addDecl(2, 3));
//     // console.log(addExpr(2, 3));
//     // console.log(addArrow(2, 3));

//     function addDecl(a, b) {
//         return a + b;
//     }

//     // var addExpr = function (a, b) {
//     //     return a + b;
//     // }

//     // var addArrow = (a, b) => a + b;

//     // Example 

//     if (!numProducts) {
//         deleteShoppingCart();
//     }

//     var numProducts = 10;

//     function deleteShoppingCart() {
//         console.log('All Products deleted!')
//     }

//     var x = 1;
//     let y = 2;
//     const z = 3;



// this Keyword.

/*console.log(this);

const calcAge = function (birthyear) {
    console.log(2037 - birthyear);
    // console.log(this);
}
calcAge(1991);


const calcAgeArrow = (birthyear) => {
    console.log(2037 - birthyear);
    // console.log(this);
}
calcAgeArrow(1980);


const song = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
song.calcAge();

const matilda = {
    year: 2017,
};
matilda.calcAge = song.calcAge;
matilda.calcAge();

const f = song.calcAge;
*/

//Regular function Vs Arrow Functions

// var firstName = 'Matilda';

const song = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        //solution 1
        // const self = this;// self or that.
        // const isMillenial = function () {
        //     console.log(this.year >= 1981 && this.year <= 1996);
        //     // console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillenial();

        //Solution 2

        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996);
            // console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};
song.greet();
song.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    a + b
};
// addArrow(2, 5, 8);

// Primitives Vs. Objects ( Primitives vs references type)


// Source of confusion 
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    firstName: 'Jonas',
    age: 30,
}

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);

// Primitive types 
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Coping objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);





/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/



// for (let i = 0; i <= 7; i++) {
//     console.log('#'.repeat(i));
// }

// for (let line = '#'; line.length <= 7; line += '#') {
//     console.log(line);
// }


/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// let grid = "";


// for (let i = 0; i < 8; i++) {
//     for (let frances = 0; frances < 8; frances++) {
//         if ((i + frances) % 2 === 0) {
//             grid += "#";
//         } else {
//             grid += " ";
//         }
//     }
//     grid += "\n";
// }
// console.log(grid);


/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

// function countBs(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'B') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countBs('BasketBallBBBBBBBBBBBBBBBBBBBBB'));


/* Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

