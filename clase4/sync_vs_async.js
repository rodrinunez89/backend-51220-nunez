/*
Repaso de sincrono vs asincrono

*/

const proceso1 = () => console.log('proceso1');
const proceso2 = () => console.log('proceso2');
const proceso3 = () => console.log('proceso3');

const proceso4 = () => {
    setTimeout(()=> {
        console.log('proceso4');
},3000);} 
//3000 = ms = miliseconds

proceso4();
proceso1();
proceso2();
proceso3();