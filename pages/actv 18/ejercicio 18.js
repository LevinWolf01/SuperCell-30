export function cargarActv18() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Ordenar vector usando el método Burbuja </h3>
        <hr width="60%">

        <br><br>

        <label for="sortInput"> Ingrese números separados por comas: </label>
        <input type="text" id="sortInput">

        <button id="procesarOrdenamiento"> Ordenar </button>

        <br><br>

        <p id="resultado18"></p>
    `);

    document.getElementById("procesarOrdenamiento").addEventListener("click", procesarOrdenamiento);
}

//-------------------------------------------------------------------------------------------------------------------
//Fucnicon Principal
export function procesarOrdenamiento() {
    const input = document.getElementById("sortInput").value;
    const numeros = input.split(",").map(num => Number(num.trim()));


    const resultado = bubbleSort(numeros);
    document.getElementById("resultado18").outerHTML =(`<p id="resultado18"> Vector ordenado: [ ${resultado.join(", ")} ] </p>`);
}

//----------------------------------------------------------------------------------------------------------------------
// Algoritmo de burbuja
export function bubbleSort(numeros) {
    const arr = [...numeros]; 
    // esta linea crea una copía del Array original, para que no se modifique el array que le pasamos desde fuera.
    // Al hacer "const arr = [...array]", usamos "spread operator" (...) para copiar todos los elementos a un nuevo array.
    // Así, la funcion "bubbleSort" trabaja sobre la copia y deja intacto el array que le pasamos.
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}