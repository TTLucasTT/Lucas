"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var altura = rls.questionInt('Ingrese su altura');
{
    if (altura >= 1.30) {
        console.log('Puedes entrar al parque de diversiones');
    }
    else {
        console.log('No puedes entrar al parque de diversiones');
    }
}
;
