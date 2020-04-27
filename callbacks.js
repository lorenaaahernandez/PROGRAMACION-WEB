// callbacks and foreach

/*let people = ['mario', 'luigi', 'ryu','shaun','lorena'];

people.forEach(function(person){
    console.log(person);
});

//forma en flecha sustituyendo function
let people = ['mario', 'luigi', 'ryu','shaun','lorena'];

people.forEach((person, index) => {
    console.log(index, person);
});*/
 //devolucion
 let people = ['mario', 'luigi', 'ryu','shaun','lorena'];

const logPerson = (person, index) => {
    console.log( index + ' '+ 'hello' + ' '+ person);
};
people.forEach(logPerson);
 //las devoluciones de llamada son simplemente funciones que pasamos
 //otra funcion u otro metodo como argumento