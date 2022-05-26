"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var eureka = true;
var clave = rls.question('Ingrese la clave: ');
if (clave == 'true') {
    console.log('contraseña Correcta');
}
else {
    console.log('Contraseña inCorrecta');
}
;
