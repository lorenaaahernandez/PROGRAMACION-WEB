//logical operators -OR || and AND &&

const password = 'p@ss12';

if(password.length >=12 && password.includes('@')){
    console.log('esta contraseña es muy fuerte');
} else if(password.length >=8 || password.includes('@') && password.length >= 5){
     console.log('esta contraseña es suficientemente larga');
 }else{
     console.log('esta contraseña no es suficientemente larga')
 }
