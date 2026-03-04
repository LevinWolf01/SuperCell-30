export function cargarActv30() {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Ordenamiento por mezcla (Merge Sort) </h3>
        <hr width="60%">

        <br><br>

        <label for="mergeSortInput">Ingrese el vector a ordenar (ej: 5,3,8,1):</label>
        <input type="text" id="mergeSortInput">

        <button id="btnMergeSort">Ordenar vector</button>

        <br><br>

        <p id="resultado30"></p>
    `);

    document.getElementById("btnMergeSort").addEventListener("click", ordenarPorMezcla);
}

//-------------------------------------------------------------------------------------------------------------------------------
// Función Principal
export function ordenarPorMezcla() {
    const input = document.getElementById("mergeSortInput").value.trim();
    const salida = document.getElementById("resultado30");
    const array = input.split(",").map(Number);

    if (!input) {
        salida.innerText = "Por favor ingrese un vector válido.";
        return;
    }

    if (array.some(isNaN)) {
        salida.innerText = "Ingrese solo números separados por comas.";
        return;
    }

    const resultado = mergeSort(array);
    salida.innerHTML = `Vector ordenado: [${resultado.join(", ")}]`;
}

//---------------------------------------------------------------------------------------------------------------------------
// Función que implementa mergeSort()
export function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

//-----------------------------------------------------------------------------------------------------------------------------
// Función que combina los 2 arrays ordenados en uno solo ordenado
export function merge(left, right) {
    const resultado = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            resultado.push(left[i]);
            i++;
        } else {
            resultado.push(right[j]);
            j++;
        }
    }

    // Agregar lo que quede
    while (i < left.length) resultado.push(left[i++]);
    while (j < right.length) resultado.push(right[j++]);

    return resultado;
}