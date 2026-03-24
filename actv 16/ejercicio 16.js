export function cargarActv16() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Promedio de elementos de un vector </h3>
        <hr width="60%">

        <br><br>

        <label for="valuesInput"> Ingrese valores separados por comas: </label>
        <input type="text" id="valuesInput" placeholder="10, 20, 30, 40">

        <br><br>

        <button id="btnProcesar16"> Calcular promedio </button>

        <br><br>

        <p id="resultado16"></p>

        <br><br>
    `);

    document.getElementById("btnProcesar16").addEventListener('click', procesarValores);
}

export function procesarValores() {
    const input = document.getElementById("valuesInput").value;
    const valuesArray = input.split(",").map(num => Number(num.trim()));


    const promedio = calculateAverage(valuesArray);
    document.getElementById("resultado16").innerHTML = ("El promedio es: ", + promedio );
}

//------------------------------------------------------------------------------------------------------------------------------    

export function calculateAverage(valuesArray) {
    let suma = 0;

    for (let i = 0; i < valuesArray.length; i++) {
        suma += valuesArray[i];
    }

    return suma / valuesArray.length;
}