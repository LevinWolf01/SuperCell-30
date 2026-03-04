export function cargarActv27() {
    const contenedorPrincipal = document.getElementById("resultados");
    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Combinar dos vectores ordenados usando 'while' </h3>
        <hr width="60%">

        <br><br>

        <label for="array1Input">Ingrese el primer vector (ordenado):</label>
        <input type="text" id="array1Input">

        <br><br>

        <label for="array2Input">Ingrese el segundo vector (ordenado):</label>
        <input type="text" id="array2Input">
        <br><br>
        <button id="btnCombinar">Combinar vectores</button>

        <br><br>

        <p id="resultado27"></p>
    `);

    document.getElementById("btnCombinar").addEventListener("click", combinarVectores);
}

// Esta funcion combina dos vectores ORDENADOS manteniendo orden
export function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let resultado = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultado.push(arr1[i]);
            i++;
        } else {
            resultado.push(arr2[j]);
            j++;
        }
    }

    // Aquí agrego lo que quede en cualquiera de los vectores
    while (i < arr1.length) {
        resultado.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resultado.push(arr2[j]);
        j++;
    }

    return resultado;
}

// aquí actualizo el resultado en el DOM 
export function updateResult(result) {
    const p = document.getElementById("resultado27");
    p.innerHTML = `Vector combinado: [${result.join(", ")}]`;
}

// Función principal 
export function combinarVectores() {
    const arr1 = document.getElementById("array1Input").value.split(",").map(Number);
    const arr2 = document.getElementById("array2Input").value.split(",").map(Number);

    if (arr1.some(isNaN) || arr2.some(isNaN)) {
        updateResult(["Entrada inválida"]);
        return;
    }

    const combinado = mergeSortedArrays(arr1, arr2);
    updateResult(combinado);
}