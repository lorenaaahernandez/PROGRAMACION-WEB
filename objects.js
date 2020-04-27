// object literals

let user = {
    name: 'lorena',
    age: 20,
    email: 'lorenahernandez947@gmail.com',
    location: 'mexico',
    blogs: ['why mac y cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user,name);

//user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'lor';
console.log (user ['name']);

console.log(typeof user);