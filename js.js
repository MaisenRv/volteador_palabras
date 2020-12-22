const boton = document.querySelector(".button");
const texto = document.querySelector(".text");
const output = document.querySelector(".output");

boton.addEventListener("click", ()=>{
    let letras = [];
    let palabra = texto.value;
    for(let i = 0; i < palabra.length ; i++){
        letras.push(palabra[i]);
    }
    letras.reverse();
    let palabraReves = letras.join("");
    console.log(palabraReves);
    output.innerHTML = palabraReves;
});
