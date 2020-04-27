// obtener una referencia sobre 'ul'
const ul = documento.querySelector('.people');

let people = ['mario', 'luigi', 'ryu','shaun','lorena'];

let html = '';

people.forEach (person => {
    //create html template
   // html += <li style = color : purple> </li>;
});
console.log(html);
ul.innerHTML = html;