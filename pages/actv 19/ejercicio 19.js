export function cargarActv19() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Producto de elementos de un vector usando while </h3>
        <hr width="60%">

        <br><br>

        <label for="productInput"> Ingrese números separados por comas: </label>
        <input type="text" id="productInput">

        <button id="procesarProducto"> Calcular Producto </button>

        <br><br>

        <p id="resultado19"></p>
    `);

    document.getElementById("procesarProducto").addEventListener("click", procesarProducto);
}
//-----------------------------------------------------------------------------------------------------------------------------
// Funcion Principal
export function procesarProducto() {
    const input = document.getElementById("productInput").value;
    const arrayNumeros = input.split(",").map(num => Number(num.trim()));

    if (!input) {
        document.getElementById("resultado19").innerText = ("Por favor ingrese números.");
        return;
    }

    
    const producto = analyzeArray(arrayNumeros, multiply);
    document.getElementById("resultado19").innerText =("El producto de los elementos es: " + producto);
}

//--------------------------------------------------------------------------------------------------------------------------
// Funcion para multiplicar :v
export function multiply(arr, operation) {
    return arr * operation;
}

//--------------------------------------------------------------------------------------------------------------------------
//Esta función recorre el array y aplica una operación entre sus elementos de manera acumulativa.
export function analyzeArray(arr, operation) {
    if (arr.length === 0) return 0;

    let i = 1;
    let result = arr[0];

    while (i < arr.length) {
        result = operation(result, arr[i]);
        i++;
    }

    return result;
}