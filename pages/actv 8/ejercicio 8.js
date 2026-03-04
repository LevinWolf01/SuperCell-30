function cargarActv8() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Mostrar números impares usando 'do-while', (desde 0, a un punto 'x') </h3>
        <hr width="60%">

        <br><br>

        <label for="limiteInput"> Ingrese el Número límite: </label>
        <input type="number" id="limiteInput">

        <button id="procesarLimite"> Mostrar Numeros inpares </button>

        <br><br>

    `);

document.getElementById("procesarLimite").addEventListener('click', procesarLimite);
}

//---------------------------------------------------------------------------------------

function procesarLimite() {

    let limit = parseInt(document.getElementById("limiteInput").value);

    let oddNumbers = showOddNumbers(limit);
    document.getElementById("resultados").innerHTML += `Los Números impares desde 0 hasta ${limit} son: ${oddNumbers}`;

}

//---------------------------------------------------------------------------------------

function showOddNumbers(limit) {
    let oddNums = [];
    let num = 0;

    do {
        if (num % 2 !== 0) {
            oddNums.push(num);
        }

        num++;

    } while (num <= limit);

    return oddNums.join(" 🔜 ");

}

export { cargarActv8, procesarLimite, showOddNumbers };
