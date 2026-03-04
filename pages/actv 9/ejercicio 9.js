function cargarActv9() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Calcular potencia usando ciclos 'for' anidados. </h3>
        <hr width="60%">

        <br><br>

        <label for="baseInput"> Ingrese la Base: </label>
        <input type="number" id="baseInput">

        <br><br>

        <label for="exponenteInput"> Ingrese el Exponente: </label>
        <input type="number" id="exponenteInput">

        <br><br>

        <button id="mostrarPotencia"> Mostrar Resultado </button>

        <br><br>

    `);

    document.getElementById("mostrarPotencia").addEventListener('click', mostrarPotencia);
}

//--------------------------------------------------------------------


function mostrarPotencia() {
    let base = parseInt(document.getElementById("baseInput").value);
    let exp = parseInt(document.getElementById("exponenteInput").value);

    let resultado = calculatePower(base, exp);

    document.getElementById("resultados").innerHTML += `El Resultado de ${base} elevado a la ${exp} es: ${resultado}`;
}

function calculatePower(base, exp) {
    let result = 1;

    for (let i = 1; i <= base; i++) {
        let temp = 1;
        for (let j = 1; j <= exp; j++) {
            temp *= base;
        }
        result = temp;
    }
    return result;
 }

export { cargarActv9, mostrarPotencia, calculatePower };
