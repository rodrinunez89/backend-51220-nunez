const sumar = (n1, n2) => {
    return new Promise((resolver, reject) => {
        if (n1 !==0 && n2 !=0) {
            resolver(n1 + n2);
            //resolve 
    }else{
        reject (`operacion no valida`)
        //reject
    }
    });
}

sumar(3,3)

.then((res)=> {
    console.log(res);
})

.catch((res)=> {
    console.log(res);
});