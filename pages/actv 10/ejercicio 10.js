function cargarActv10() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Mostrar Secuencia de Fibonacci (con ciclos While) </h3>
        <hr width="60%">

        <br><br>

        <label for="terminosInput"> Ingrese el Limite de la Secuencia: </label>
        <input type="number" id="terminosInput">

        <br><br>

        <button id="procesarTerminos"> Mostrar Secuencia </button>

        <br><br>

    `);

    document.getElementById("procesarTerminos").addEventListener('click', procesarTerminos);
}

function procesarTerminos() {
    let terms = parseInt(document.getElementById("terminosInput").value);

    let temrsCalculated = generateFibonacci(terms);
    document.getElementById("resultados").innerHTML += temrsCalculated.join(" —> ");

}

function generateFibonacci(terms) {

    let fiboSecuence = [];

    let a = 0;
    let b = 1;
    let SigTerm;

    let count = 0;

    while (count < terms) {
        fiboSecuence.push(a);
        SigTerm = a + b;
        a = b;
        b = SigTerm;
        count++;
    }
    return fiboSecuence;
}


export { cargarActv10, procesarTerminos, generateFibonacci };
