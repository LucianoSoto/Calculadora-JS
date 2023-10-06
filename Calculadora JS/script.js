let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");
let resultado = document.getElementById("resultado");
let reset = document.getElementById("reset");
let op = document.getElementById("math");

submit.addEventListener("click", function(e){
   
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let c = 0;

    switch (op.value){
        case "sumar":
            c = a+b;
        break;
        case "restar": 
            c = a-b;
        break;
        case "multiplicar":
            c = a*b;
        break;
        case "dividir":
            c = a/b;
        break;
    }

    if (isNaN(c)){
        c = "Insertar solo valores numericos";
    }

    resultado.innerHTML = c;
    e.preventDefault();
})

reset.addEventListener("click", function(e){
    resultado.innerHTML = 0;
    num1.value = 0;
    num2.value = 0;
    op.value = "default";
    e.preventDefault();
})
