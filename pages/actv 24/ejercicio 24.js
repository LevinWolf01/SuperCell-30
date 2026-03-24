export function cargarActv24() {
    const contenedor = document.getElementById("resultados");

    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Búsqueda binaria en vector ordenado con while </h3>
        <hr width="60%">
        <br><br>

        <label for="sortedArrayInput"> Vector ordenado (ej: 1,4,6,9,20): </label>
        <input id="sortedArrayInput" type="text">

        <br><br>
        <hr width="20%">
        <br><br>

        <label for="valueInput"> Valor a buscar: </label>
        <input id="valueInput" type="number">

        <br><br>

        <button id="btnBuscar"> Buscar </button>

        <br><br>

        <p id="resultado24"></p>
    `);

    document.getElementById("btnBuscar").addEventListener('click', ejecutarBusquedaBinaria);
}

//-------------------------------------------------------------------------------------------------------------------------

// Función principal.
export function ejecutarBusquedaBinaria() {
    const arrayInput = document.getElementById("sortedArrayInput").value;
    const value = Number(document.getElementById("valueInput").value);
    const salida = document.getElementById("resultado24");

    if (!arrayInput.trim()) {
        salida.innerText = "Por favor ingresa un vector válido.";
        return;
    }

    const arr = arrayInput.split(",").map(n => Number(n.trim()));
    const posicion = binarySearch(arr, value);

    salida.innerText =
        posicion !== -1
            ? `El valor ${value} está en la posición ${posicion}.`
            : `El valor ${value} no se encuentra en el vector.`;
}

//--------------------------------------------------------------------------------------------------------------------------
// Función que realiza la búsqueda binaria.
export function binarySearch(array, value) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (array[mid] === value) 
            return mid;
        
        if (array[mid] < value) 
            low = mid + 1;
        else 
            high = mid - 1;
    }

    return -1;
}