function cargarActv7() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <h3> Suma de Numeros pares EN RANGO (de punto A a punto B) con "for"</h3>

        <label for="InicioInput"> Inicio: </label>
        <input type="number" id="InicioInput">

        <br><br>

        <label for="FinInput"> Fin: </label>
        <input type="number" id="FinInput">

        <br><br>

        <button id ="mostrarSuma"> Mostrar Suma (Numeros Pares) </button>

        <br><br>

        <p id="resultado"></p>

    `);

    document.getElementById("mostrarSuma").addEventListener('click', mostrarSuma);

}

function mostrarSuma() {
    let start = parseInt(document.getElementById("InicioInput").value);
    let end = parseInt(document.getElementById("FinInput").value);

    let SumaPar = sumEventNumbers(start, end);
    document.getElementById("resultado").innerHTML = `El Resultado de la suma entre los números pares entre ${start} y ${end} es: ${SumaPar}`;
}

function sumEventNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
    //Revisar Esto, pues, por alguna razón, ya no está sumando, sinó que está concatenando!

}

export { cargarActv7, mostrarSuma, sumEventNumbers };
