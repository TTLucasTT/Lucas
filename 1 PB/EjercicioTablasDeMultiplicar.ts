import * as rls from "readline-sync";

let numTabla : number = rls.questionInt("Qué tabla desea?");

let limiteTabla : number = rls.questionInt("Hasta qué número desea?");

let resultado : number = 0;

for (let contador : number = 1; contador <= limiteTabla; contador++) {

resultado = numTabla * contador;

console.log(numTabla, " x ", contador, " = ", resultado ); }