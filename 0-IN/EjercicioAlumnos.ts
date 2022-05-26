import *as rls from 'readline-sync';

let nombreAlumno = rls.question("Ingrese el nombre del alumno ");

let notaPractica, notaProblemas, notaTeorica, notaFinal

while (nombreAlumno != "") {

notaPractica = rls.questionInt("Nota práctica: " );

notaProblemas = rls.questionInt("Nota problemas: " );

notaTeorica = rls.questionInt("Nota teórica: " );

if (notaPractica <= 10 && notaPractica >= 0 && notaProblemas <= 10 && notaProblemas >= 0  &&

notaTeorica <= 10 && notaTeorica >= 0) {

    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4 ;

    let nombreAlumno;
    
    console.log ("La nota final de ", nombreAlumno, " es: ", notaFinal );



} else {

    console.log ("Error en las notas ingresadas" );
}
 }