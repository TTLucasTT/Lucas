import * as rls from 'readline-sync';


let altura : number = rls.questionInt('Ingrese su altura');{ 

if (altura >= 1.30){
    console.log('Puedes entrar al parque de diversiones')
} else {
    console.log('No puedes entrar al parque de diversiones')
} 
};




