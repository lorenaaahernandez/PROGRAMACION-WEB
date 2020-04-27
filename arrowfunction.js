//regular function
/*const calArea = function(radius){
    return 3.14 * radius**2;
    
}
//arrow function
const calArea = radius => 3.14 * radius **2;




const area = calArea(5);
console.log('area is:' , area) /*
//ejemplos para convertir de funcion tradicional a flecha
1.
/*const greet = function(){
    return 'hello, word';
} 


//asi quedo cen flecha
const greet = () => 'hello, word';
 const result = greet();
 console.log(result);
 

const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products [i] + products[i] * tax;
    }
    return total;
}*/
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products [i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30],0.2));