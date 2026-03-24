function cargarActv2() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <h3> Sumar Numeros del 1 al 100 con "while" </h3>
            <hr width="60%">

            <br><br>
            <button id="sumarNumeros"> Mostrar Suma </button>
            <br><br>
    `);

    document.getElementById("sumarNumeros").addEventListener("click", sumarNumeros);
}
function sumarNumeros() {
    let numero = 0;

    while (numero < 100) { numero++; console.log(numero); }


    alert(numero);
}

export { cargarActv2, sumarNumeros };
