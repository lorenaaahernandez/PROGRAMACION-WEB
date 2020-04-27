// primitive values

/*let scoresOne = 50;
let scoreTwo = scoresOne;

console.log ('scoreOne' + scoresOne +  'scoreTwo'+ scoreTwo);

scoresOne = 100;
console.log ('scoreOne' + scoresOne +  'scoreTwo'+ scoreTwo);*/

//reference values

const userOne = {name: 'lorena', age:20 };
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.name = 'clari';
console.log(userOne,userTwo);