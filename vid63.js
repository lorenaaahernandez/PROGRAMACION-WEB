const para = document.querySelector('p');

/*console.log(para.innerText);

//asi es como toma los datos que antes tenia y se cambian
para.innerText = 'Ya casi termino el curso';*/

const paras = document.querySelectorAll('p');

/*paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += 'new text';
});*/

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2> THIS IS A NEW H2</h2>'
const people = ['mario', 'luigui', 'yoshi'];

people.forEach(person => {
   content.innerHTML += <p> ${person}</p>
});