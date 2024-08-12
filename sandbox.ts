// const character = 'soujan';
// console.log(character);

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach (input => {
//     console.log(input);
// });


// let myName = 'soujan';
// let age = 30;
// let isBlackBelt = false;

// // myName = 20;
// myName = 'souji';

// // age = 'ram';
// age = 30;

// // isBlackBelt = 'No';
// isBlackBelt = true;

// //types cannot change once it is assigned
// TS defines the types on inference (based on vale provided)



// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circ(7));
//users can explicitly define types
//TS allows to type check the code before runtime

//.....Arrays........
let names = ['soujan','shreya','meghna','shrena'];
// names = 'souji';
names.push('sanudai');
// names.push(1);
// names[0] = 3;

let numbers = [1,2,4,5,8];
numbers.push(25);
// numbers.push('hello');

let mixed = ['ken',4,true,'chun-li',8,false,9];


//you need to declare the type of array in the start
//array type cannot be changed after declaration

mixed.push('ryan');
mixed.push(55);
mixed[2] = 'Subedi';

//.....Objects......

//type rules are same as array
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.name = 'soujan';
ninja.age = 20;
// ninja.age = '30';
// ninja.skills = ['fight'];


//overide the object
ninja = {
    name: 'yoshi',
    belt: 'green',
    age: 40,
    // kill : true
}