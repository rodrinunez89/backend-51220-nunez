let lecturas = [ 21, 22, 23, 24, 25, 26, 27, 28, 29];

const LIMITE = 23;
let elem_excedidos = 0;
 lecturas.map((item)=> {
    if (item > LIMITE) {
        elem_excedidos = elem_excedidos + 1; }});



console.log(`elem_excedidos: ${elem_excedidos}`);